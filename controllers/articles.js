const express = require("express");
const app = express();

const cangguModel = require("../models/article-canggu");
const nusaduaModel = require("../models/article-nusadua");
const kintamaniModel = require ("../models/article-kintamani");
const ubudModel = require ("../models/article-ubud");
const seminyakModel = require ("../models/article-seminyak");
const kutaModel = require ("../models/article-kuta");
const detailModel = require('../models/details');

const getAllCanggu = async(req, res) => {
    try{
    const canggu = await cangguModel.find({});
    res.status(200).json({canggu});
    if (!canggu) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(canggu);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

const getAllNusaDua = async(req, res) => {
    try{
    const nusadua = await nusaduaModel.find({});
    res.status(200).json({nusadua});
    if (!nusadua) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(nusadua);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

const getAllKintamani = async(req, res) => {
    try{
    const kintamani = await kintamaniModel.find({});
    res.status(200).json({kintamani});
    if (!kintamani) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(kintamani);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

const getAllUbud = async(req, res) => {
    try{
    const ubud = await ubudModel.find({});
    res.status(200).json({ubud});
    
    if (!ubud) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(ubud);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

const getAllKuta = async(req, res) => {
    try{
    const kuta = await kutaModel.find({});
    res.status(200).json({kuta});
    if (!kuta) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(kuta);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

const getAllSeminyak = async(req, res) => {
    try{
    const seminyak = await seminyakModel.find({});
    res.status(200).json({seminyak});

    if (!seminyak) {
        return res.status(404).send({ message: 'article not found' });
      }
      res.send(seminyak);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching article' });
    }
};

// handler untuk mendapatkan detail berdasarkan ID
const getDetailbyId = async(req, res) => {
  try {
    const detailId = req.params.id;
    const detail = await detailModel.findById(detailId);

    if (!detail) {
      return res.status(404).send({ message: 'detail not found' });
    }

    res.send(detail);
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
    getDetailbyId}