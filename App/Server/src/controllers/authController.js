import express from "express";
import jwt from "jsonwebtoken";

import { sendResetPasswordEmail } from "../mail/mailer";
import User from "../models/user";

export const auth = (req, res) => {
  const credentials = req.body.credentials;

  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJson() });
    } else {
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
  });
};

export const confirmation = (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: "", confirmed: true },
    { new: true }
  ).then(
    user =>
      user ? res.json({ user: user.toAuthJson() }) : res.status(400).json({})
  );
};

export const reset_password_request = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      sendResetPasswordEmail(user);
      res.json({});
    } else {
      res.status(400).json({
        errors: { global: "There is no user with this email" }
      });
    }
  });
};

export const validate_token = (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, err => {
    if (err) {
      res.status(401).json({});
    } else {
      res.json({});
    }
  });
};

export const reset_password = (req, res) => {
  const _req$body$data = req.body.data;
  const password = _req$body$data.password;
  const token = _req$body$data.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ errors: { global: "Invalid token" } });
    } else {
      User.findOne({ _id: decoded._id }).then(user => {
        if (user) {
          user.setPassword(password);
          user.save().then(() => res.json({}));
        } else {
          res.status(404).json({ errors: { global: "Invalid token" } });
        }
      });
    }
  });
};
