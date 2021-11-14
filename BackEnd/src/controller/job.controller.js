const express = require("express");
const Job= require("../modals/job.modal");
const router = express.Router();

router.post("/", async (req, res) => {
  const job = await Job.create(req.body);
  return res.status(201).send({ job });
});

router.get("/", async (req, res) => {
  const job = await Job.find().lean().exec();
  return res.status(200).send({ job });
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id).lean().exec();
  return res.status(200).send({ job });
});

router.patch("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({job});
});

router.delete("/:id", async (req, res) => {
  const job = await Job.findByIdAndRemove(req.params.id);
  return res.status(200).send({job});
});

module.exports = router;
