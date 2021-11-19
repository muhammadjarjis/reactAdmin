import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductFormItem img">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductFormItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Watch" />
        </div>
        <div className="addProductFormItem">
          <label>Stock</label>
          <input type="text" placeholder="12" />
        </div>
        <div className="addProductFormItem">
          <label>Active</label>
          <select className="addProductFormItemSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductFormButton">Create</button>
      </form>
    </div>
  );
}
