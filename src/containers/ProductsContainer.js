import { connect } from "react-redux";
import Products from "../components/Products";
import {
  productsLoaded,
  createProduct
} from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Products mounted!");
      dispatch(createProduct());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);

/*
import { connect } from "react-redux";
import Products from "../components/Products";
import { productLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Products mounted!");
      dispatch(productLoadStart());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
*/
