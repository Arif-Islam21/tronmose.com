import { Link, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MemberList = () => {
  const { memberList } = useParams();
  const data = [
    { account: "user1", login: "2025-04-10 10:30 AM", contribution: 150 },
    { account: "user2", login: "2025-04-11 02:15 PM", contribution: 220 },
    { account: "user3", login: "2025-04-12 09:45 AM", contribution: 180 },
  ];
  return (
    <div className="container mt-2">
      <div className="text-center p-3 position-relative">
        {/* Back Button */}
        <Link
          to={-1}
          className="btn btn-secondary position-absolute start-0 top-50
          translate-middle-y ms-3"
        >
          <span className="d-flex align-items-center gap-2">
            <FaArrowAltCircleLeft size={20} />
            Back
          </span>
        </Link>

        <h4 className="d-inline-block center px-4 py-2 fs-bold rounded-pill bg-danger text-white shadow">
          {memberList} User Information
        </h4>
      </div>

      <div className="table-responsive">
        <table className="table text-center rounded overflow-hidden">
          <thead style={{ backgroundColor: "#ffc0cb" /* light pink */ }}>
            <tr>
              <th>Account</th>
              <th>Last Login Time</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#d9d9d9", // Alternating grays
                }}
              >
                <td>{user.account}</td>
                <td>{user.login}</td>
                <td>{user.contribution}</td>
              </tr>
            ))}
            <tr style={{ backgroundColor: "#ffc0cb", fontWeight: "bold" }}>
              <td colSpan="3">End</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
