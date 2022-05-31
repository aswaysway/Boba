function Dialog({ message, onDialog, nameProduct }) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h5 style={{ color: "#484545", fontFamily: "Poppins", fontSize: "0.8rem"}}>Are you sure you want to delete?</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => onDialog(true)}
              style={{
                background: "#a2e8d7",
                fontFamily: "Poppins",
                fontSize: "0.7rem",
                color: "black",
                padding: "10px",
                marginRight: "4px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Yes
            </button>
            <button
              onClick={() => onDialog(false)}
              style={{
                background: "#f7baba",
                fontFamily: "Poppins",
                fontSize: "0.7rem",
                color: "black",
                padding: "10px",
                paddingLeft: "12.4px",
                paddingRight: "12.4px",
                marginRight: "4px",
                border: "none",
                cursor: "pointer"
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
export default Dialog;