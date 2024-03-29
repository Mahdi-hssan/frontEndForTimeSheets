import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
  const history = useHistory();
  const backToHome = () => {
    history.push("/home/dashboard");
  };

  return (
    <div className="bodyNot">
      <div className="containerNot">
        <h1 id="h1n">
          Ooops! Sorry,
          <br /> Page Not found{" "}
        </h1>
      </div>
      <div className="rain-deamon404">
        <div className="rain">
          <div className="rainw"></div>
          <div className="rainr"></div>

          <div className="rainw2"></div>
          <div className="rainw3"></div>
        </div>

        <div className="demon404">
          <div className="demond4">
            <svg
              width="160"
              height="142"
              viewBox="0 0 200 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9819 92.1368L41.1604 22.3229L99.0318 61.7145L35.9819 92.1368Z"
                fill="#FE0000"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M101.665 61.9608L159.538 22.5713L164.714 92.3854L101.665 61.9608Z"
                fill="#FE0000"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M168.5 113.775C168.5 150.472 138.086 180.275 100.5 180.275C62.9136 180.275 32.5 150.472 32.5 113.775C32.5 77.0792 62.9136 47.2754 100.5 47.2754C138.086 47.2754 168.5 77.0792 168.5 113.775Z"
                fill="#FE0000"
                stroke="#F8F7F7"
                strokeWidth="3"
              />
              <path
                d="M96.5899 93.187C97.3946 92.9504 98.3176 92.761 99.3589 92.619C100.448 92.4297 101.394 92.335 102.199 92.335C103.193 92.335 104.14 92.4297 105.039 92.619C105.986 92.8084 106.814 93.1397 107.524 93.613C108.234 94.039 108.802 94.6544 109.228 95.459C109.654 96.2164 109.867 97.1867 109.867 98.37V118.392H115.689C115.973 118.818 116.233 119.433 116.47 120.238C116.754 120.995 116.896 121.8 116.896 122.652C116.896 124.261 116.517 125.421 115.76 126.131C115.05 126.794 114.127 127.125 112.991 127.125H109.867V136C109.394 136.095 108.684 136.213 107.737 136.355C106.838 136.497 105.938 136.568 105.039 136.568C103.193 136.568 101.749 136.308 100.708 135.787C99.7139 135.266 99.2169 134.012 99.2169 132.024V127.125H81.6799C80.7332 126.604 79.9049 125.847 79.1949 124.853C78.4849 123.859 78.1299 122.628 78.1299 121.161C78.1299 120.356 78.2246 119.481 78.4139 118.534C78.6032 117.587 78.9582 116.759 79.4789 116.049L96.5899 93.187ZM99.7849 103.34H99.5719L89.4899 118.392H99.7849V103.34Z"
                fill="#FFFEFE"
              />
            </svg>
          </div>
          <div className="demond42">
            <svg
              width="160"
              height="142"
              viewBox="0 0 200 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9819 92.1368L41.1604 22.3229L99.0318 61.7145L35.9819 92.1368Z"
                fill="#FE0000"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M101.665 61.9608L159.538 22.5713L164.714 92.3854L101.665 61.9608Z"
                fill="#FE0000"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M168.5 113.775C168.5 150.472 138.086 180.275 100.5 180.275C62.9136 180.275 32.5 150.472 32.5 113.775C32.5 77.0792 62.9136 47.2754 100.5 47.2754C138.086 47.2754 168.5 77.0792 168.5 113.775Z"
                fill="#FE0000"
                stroke="#F8F7F7"
                strokeWidth="3"
              />
              <path
                d="M96.5899 93.187C97.3946 92.9504 98.3176 92.761 99.3589 92.619C100.448 92.4297 101.394 92.335 102.199 92.335C103.193 92.335 104.14 92.4297 105.039 92.619C105.986 92.8084 106.814 93.1397 107.524 93.613C108.234 94.039 108.802 94.6544 109.228 95.459C109.654 96.2164 109.867 97.1867 109.867 98.37V118.392H115.689C115.973 118.818 116.233 119.433 116.47 120.238C116.754 120.995 116.896 121.8 116.896 122.652C116.896 124.261 116.517 125.421 115.76 126.131C115.05 126.794 114.127 127.125 112.991 127.125H109.867V136C109.394 136.095 108.684 136.213 107.737 136.355C106.838 136.497 105.938 136.568 105.039 136.568C103.193 136.568 101.749 136.308 100.708 135.787C99.7139 135.266 99.2169 134.012 99.2169 132.024V127.125H81.6799C80.7332 126.604 79.9049 125.847 79.1949 124.853C78.4849 123.859 78.1299 122.628 78.1299 121.161C78.1299 120.356 78.2246 119.481 78.4139 118.534C78.6032 117.587 78.9582 116.759 79.4789 116.049L96.5899 93.187ZM99.7849 103.34H99.5719L89.4899 118.392H99.7849V103.34Z"
                fill="#FFFEFE"
              />
            </svg>
          </div>
          <div className="demond0">
            <svg
              width="160"
              height="142"
              viewBox="0 0 200 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9819 92.1368L41.1604 22.3229L99.0318 61.7145L35.9819 92.1368Z"
                fill="white"
                stroke="#FE0000"
                strokeWidth="3"
              />
              <path
                d="M101.665 61.9608L159.538 22.5713L164.714 92.3854L101.665 61.9608Z"
                fill="white"
                stroke="#FE0000"
                strokeWidth="3"
              />
              <path
                d="M168.5 113.775C168.5 150.472 138.086 180.275 100.5 180.275C62.9136 180.275 32.5 150.472 32.5 113.775C32.5 77.0792 62.9136 47.2754 100.5 47.2754C138.086 47.2754 168.5 77.0792 168.5 113.775Z"
                fill="white"
                stroke="#FE0000"
                strokeWidth="3"
              />
              <path
                d="M108.039 117.416C108.039 112.825 107.329 109.369 105.909 107.05C104.536 104.683 102.667 103.5 100.3 103.5C97.9333 103.5 96.0637 104.683 94.691 107.05C93.3657 109.369 92.703 112.825 92.703 117.416C92.703 122.149 93.342 125.676 94.62 127.995C95.9453 130.267 97.8387 131.403 100.3 131.403C102.761 131.403 104.655 130.267 105.98 127.995C107.353 125.676 108.039 122.149 108.039 117.416ZM100.371 140.065C97.6257 140.065 95.0933 139.592 92.774 138.645C90.502 137.698 88.5377 136.278 86.881 134.385C85.2717 132.492 84.0173 130.149 83.118 127.356C82.2187 124.516 81.769 121.203 81.769 117.416C81.769 113.677 82.2187 110.411 83.118 107.618C84.0647 104.778 85.3663 102.411 87.023 100.518C88.6797 98.6247 90.644 97.2047 92.916 96.258C95.188 95.3113 97.673 94.838 100.371 94.838C103.022 94.838 105.483 95.3113 107.755 96.258C110.027 97.2047 111.991 98.6247 113.648 100.518C115.305 102.411 116.606 104.778 117.553 107.618C118.5 110.411 118.973 113.677 118.973 117.416C118.973 121.203 118.5 124.516 117.553 127.356C116.654 130.149 115.376 132.492 113.719 134.385C112.11 136.278 110.145 137.698 107.826 138.645C105.554 139.592 103.069 140.065 100.371 140.065Z"
                fill="#FE0000"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="btnposi">
        <button className="btnNN" onClick={backToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
