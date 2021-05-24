import { fork, call, put, takeLatest, all } from "@redux-saga/core/effects"
import { ACTIONS_PRODUCTOS, selProd, setearLista } from "../redux/actions";
import { GETAllProductos, GETProducto } from "../services/http.service";

export function* rootSaga() {
    yield all([
        fork(productSaga),
        fork(selectSaga),
    ]);


}

// El saga quedará a la escucha de la ultima acción ejecutada
// del tipo LOAD_PROODUCTS, gracias al método takeLatest, y ejecutará
// la función indicada como segundo argumento cuando detecte esa acción.
function* productSaga() {
    yield takeLatest(ACTIONS_PRODUCTOS.LOAD_PRODUCTS, loadProducts);
}

function* selectSaga() {
    yield takeLatest(ACTIONS_PRODUCTOS.CARGAR_UNO, cargaProd);
}

// También como generadora, esta función obtendrá el listado de productos
// utilizando axios, y luego lanzará una nueva acción para actualizar el
// listado, en lugar de con dispatch, utilizando el método propio put.
function* loadProducts() {
    const listaProducts = yield call(() => GETAllProductos());
    yield put(setearLista(listaProducts));
}

function* cargaProd(index) {
    const number = index.payload;
    const productoSel = yield call(() => GETProducto(number));
    yield put(selProd(productoSel));
}