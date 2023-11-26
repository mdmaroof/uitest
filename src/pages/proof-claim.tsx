import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { useState } from "react";

export const ProofClaim = () => {
  const [selectedData, setSelectedData] = useState<number[]>([]);

  const selectBox = (value: number) => {
    if (selectedData.some((z) => z === value)) {
      setSelectedData(selectedData.filter((z) => z !== value));
      return;
    }
    setSelectedData((prev: number[]) => [...prev, value]);
  };

  return (
    <div className="bg-white">
      <div className="flex-row">
        <div className="button flex-row gap-5">
          Selected <span>{selectedData.length || 0}</span>
          <ArrowDropDownIcon sx={{ color: "black" }} />
        </div>
        <div className="flex-1">
          <input className="w-full inputCustom" />
        </div>
        <div className="button flex-row gap-5">
          <SearchIcon /> Search form
        </div>
        <div className="button flex-row gap-5">
          <ArrowDropDownIcon />
          Show Option
        </div>

        <div className="flex-row gap-5">
          <SkipPreviousIcon sx={{ color: "#c2c2c2", fontSize: "24px" }} />
          <NavigateBeforeIcon sx={{ color: "#c2c2c2", fontSize: "24px" }} />
          <div className="text-1">1 to 2 of 2</div>
          <NavigateNextIcon sx={{ color: "#c2c2c2", fontSize: "24px" }} />
          <SkipNextIcon sx={{ color: "#c2c2c2", fontSize: "24px" }} />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <td></td>
            <td>Created</td>
            <td>Modified</td>
            <td>Workflow stage</td>
            <th>FTX Email</th>
            <th>FTX AccountID</th>
            <th>Schedule ID</th>
            <th>Schedule</th>
            <th>Non Schedule, Contignment, Unliquidated or Disputed Status</th>
            <td>Creditor Name</td>
            <td>Email Address</td>
            <td>DOCUMENT ID</td>
            <td>CONFIRMATION ID</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={selectedData.some((z) => z === 1)}
                onClick={() => selectBox(1)}
              />
            </td>
            <td>Oct 28</td>
            <td>Oct 28</td>
            <td>Sceduled</td>
            <td>discoverweb2021@gmail</td>
            <td>115408177</td>
            <td>221106807572570</td>
            <td>F-19</td>
            <td></td>
            <td></td>
            <td></td>
            <td>434234234326746782</td>
            <td>43423423432674678</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={selectedData.some((z) => z === 2)}
                onClick={() => selectBox(2)}
              />
            </td>
            <td>Oct 28</td>
            <td>Oct 28</td>
            <td>Sceduled</td>
            <td>discoverweb2021@gmail</td>
            <td>115408177</td>
            <td>221106807572570</td>
            <td>F-19</td>
            <td></td>
            <td></td>
            <td></td>
            <td>434234234326746782</td>
            <td>43423423432674678</td>
          </tr>
        </tbody>
      </table>

      <div className="flex-row center">
        <div className="button2">File a Claim or Accept Schedule</div>
      </div>
    </div>
  );
};
