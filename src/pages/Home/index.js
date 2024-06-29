import React from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/flip-card.css'
 
function Home() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/")
  };
  const toHome = () => {
    navigate("/home")
  };
  const toDocument = () => {
    navigate("/document")
  };
  const toSearching = () => {
    navigate("/searching")
  };

  const toSetting = () => {
    navigate("/setting")
  };
  const toUser = () => {
    navigate("/user")
  };

  return (
    <div class="p-2">
      <button style={{float:"right"}} onClick={logout}
      >logout</button>
       <div class="py-5">
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col transaksi-flip-card">
            <div className="transaksi-flip-card-inner">
              <div className="transaksi-flip-card-front p-4" onClick={toHome}>
              <i class="fa fa-home fa-4x"  aria-hidden="true"></i>
              <div className="pt-2">
                Home
                </div>
              </div>
              <div className="transaksi-flip-card-back" style={{ color: "red" }}>
                Home - Belakang
              </div>
            </div>
          </div>
          <div class="col transaksi-flip-card">
            <div className="transaksi-flip-card-inner" onClick={toDocument}>
              <div className="transaksi-flip-card-front p-4" >
              <i class="fa fa-file-text fa-4x"  aria-hidden="true"></i>
              <div className="pt-2">
                  Document
                </div>
              </div>
              <div className="transaksi-flip-card-back" style={{ color: "red" }}>
                Document - Belakang
              </div>
            </div>
          </div>
          <div class="col transaksi-flip-card">
            <div className="transaksi-flip-card-inner"  onClick={toSearching}>
            <div className="transaksi-flip-card-front p-4">
            <i class="fa fa-search fa-4x"  aria-hidden="true"></i>
              <div className="pt-2">
                Searching
                </div>
              </div>
              <div className="transaksi-flip-card-back" style={{ color: "red" }}>
                Searching - Belakang
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col transaksi-flip-card">
            <div className="transaksi-flip-card-inner" onClick={toSetting}>
              <div className="transaksi-flip-card-front p-4" >
              <i class="fa fa-cog fa-4x"  aria-hidden="true"></i>
              <div className="pt-2">
              Setting
                </div>
              </div>
              <div className="transaksi-flip-card-back" style={{ color: "red" }}>
                Setting - Belakang
              </div>
            </div>
          </div>
          <div class="col transaksi-flip-card">
            <div className="transaksi-flip-card-inner" onClick={toUser}>
            <div className="transaksi-flip-card-front p-4" >
              <i class="fa fa-user fa-4x"  aria-hidden="true"></i>
              <div className="pt-2">
              User
                </div>
              </div>
              <div className="transaksi-flip-card-back" style={{ color: "red" }}>
                User - Belakang
              </div>
            </div>
          </div>
          <div class="col transaksi-flip-card">
            {/* Sengaja Kosong */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;