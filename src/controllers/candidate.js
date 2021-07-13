import candidate from "../model/candidate";

class CandidateController {
  static async getAll(req, res) {
    try {
      const { page = 1 } = req.query;

      const options = {
        select: [
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "cv",
          "status",
        ],
        sort: { first_name: "ASC" },
        page,
        limit: 10,
      };

      const applicants = await candidate.paginate({}, options);

      return res.status(200).json({ applicants });
    } catch (error) {
      return res.status(500).json({ ...error });
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;

    try {
      const applicant = await candidate
        .findOne({ _id: id })
        .select([
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "cv",
          "status",
        ]);

      if (!applicant)
        return res.status(404).json({ message: "Candidate not found." });

      return res.status(200).json({ applicant });
    } catch (error) {
      switch (error.path) {
        case "_id":
          return res.status(400).json({ message: "Invalid id." });
        default:
          return res.status(500).json({ ...error });
      }
    }
  }

  static async createApplication(req, res) {
    try {
      const saved = await candidate.create({ ...req.body });

      return res.status(201).json({ message: "Application sent.", saved });
    } catch (error) {
      return res.status(500).json({ ...error });
    }
  }

  static async updateStatus(req, res) {
    const { id } = req.params;
    const where = { _id: id };
    const change = req.body;
    try {
      const changeStatus = await candidate.findOneAndUpdate(where, change, {
        upsert: true,
      });

      if (!changeStatus)
        return res.status(404).json({ message: "Candidate not found." });

      return res.status(201).json({ message: "Status updated." });
    } catch (error) {
      return res.status(500).json({ ...error });
    }
  }
}
export default CandidateController;
