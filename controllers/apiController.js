const express = require("express");
const axios = require("axios");
const { Contest } = require("../model/contest");

const handleListofAllContests = async (req, res) => {
  // Currently set to be used to return last 5 contests
  try {
    console.log("Request to getContestList received");
    const response = await axios.get("https://codeforces.com/api/contest.list");
    const limitedContests = response.data.result.slice(0, 5);
    console.log("Response for the contests", limitedContests);
    return res.json(limitedContests);
  } catch (error) {
    console.error("Error fetching contest list:", error.message);
    throw error;
  }
};

const handleSavingListofAllContests = async (req, res) => {
  // Make API call to Codeforces
  const response = await axios.get("https://codeforces.com/api/contest.list");
  // console.log(response.data.result.slice(0, 5));
  try {
    const contestsToSave = response.data.result.slice(0, 5).map((contest) => ({
      nameOfContest: contest.name,
      idOfContest: contest.id,
      typeOfContest: contest.type,
    }));

    await Contest.insertMany(contestsToSave);
    return res.status(200).json({msg: "Added the contests successfully"});

  } catch (error) {
    console.error("Error fetching contest list:", error.message);
    throw error;
  }
};

module.exports = {
  handleListofAllContests,
  handleSavingListofAllContests,
};
