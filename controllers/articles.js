const express = require("express");
const app = express();

const cangguModel = require("../models/article-canggu");
const nusaduaModel = require("../models/article-nusadua");
const kintamaniModel = require("../models/article-kintamani");
const ubudModel = require("../models/article-ubud");
const seminyakModel = require("../models/article-seminyak");
const kutaModel = require("../models/article-kuta");
const detailModel = require('../models/details');

// Handler untuk mendapatkan semua artikel di Canggu
const getAllCanggu = async (req, res) => {
  try {
    const canggu = await cangguModel.find({});
    if (!canggu || canggu.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ canggu });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan semua artikel di Nusa Dua
const getAllNusaDua = async (req, res) => {
  try {
    const nusadua = await nusaduaModel.find({});
    if (!nusadua || nusadua.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ nusadua });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan semua artikel di Kintamani
const getAllKintamani = async (req, res) => {
  try {
    const kintamani = await kintamaniModel.find({});
    if (!kintamani || kintamani.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ kintamani });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan semua artikel di Ubud
const getAllUbud = async (req, res) => {
  try {
    const ubud = await ubudModel.find({});
    if (!ubud || ubud.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ ubud });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan semua artikel di Kuta
const getAllKuta = async (req, res) => {
  try {
    const kuta = await kutaModel.find({});
    if (!kuta || kuta.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ kuta });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan semua artikel di Seminyak
const getAllSeminyak = async (req, res) => {
  try {
    const seminyak = await seminyakModel.find({});
    if (!seminyak || seminyak.length === 0) {
      return res.status(404).send({ message: 'Article not found' });
    }
    res.status(200).json({ seminyak });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching article' });
  }
};

// Handler untuk mendapatkan detail berdasarkan ID
const getDetailbyId = async (req, res) => {
  try {
    const detailId = req.params.id;
    const detail = await detailModel.findById(detailId);
    if (!detail) {
      return res.status(404).send({ message: 'Detail not found' });
    }
    res.status(200).json({ detail });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching detail' });
  }
};

module.exports = {
  getAllCanggu,
  getAllNusaDua,
  getAllKintamani,
  getAllKuta,
  getAllSeminyak,
  getAllUbud,
  getDetailbyId
};
