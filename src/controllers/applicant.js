import applicant from "../model/applicant";

class ApplicantController {
  static home(req, res) {
    res.status(200).json({
      message: "Hello world!",
    });
  }
}
export default ApplicantController;
