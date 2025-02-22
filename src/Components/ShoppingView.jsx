import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdRemoveRedEye } from "react-icons/md";
import '../css/style.css'
import { useShoppingContext } from "../Context/Shopping.context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function ShoppingView({ id }) {
  const [open, setOpen] = React.useState(false);
  const { getShoppingAndSuppliesBySupplierId } = useShoppingContext()
  const [shoppingData, setShoppingData] = useState([])

  useEffect(() => {

    return async () => {
      if (open) return
      const data = await getShoppingAndSuppliesBySupplierId(id)
      setShoppingData(data)
    }
  }, [open])
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={handleOpen}
        className="btn  btn-icon btn-primary mr-1">
        <MdRemoveRedEye />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5>Detalle de compras</h5>
                </div>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Insumo</th>
                        <th>Cantidad</th>
                        <th>Medida</th>
                        <th>Precio</th>

                      </tr>
                    </thead>
                    <tbody>

                      {
                        shoppingData.map(
                          ({
                            Lot,
                            Price_Supplier,
                            Supply: {
                              Name_Supplies,
                              Measure
                            }
                          }) => (
                            <>
                              <tr >
                                <td>{Name_Supplies}</td>
                                <td>{Lot}</td>
                                <td>{Measure}</td>
                                <td>{Price_Supplier}</td>
                              </tr>
                            </>
                          )
                        )
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ShoppingView

