import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense>
                    <HomePage />
                </Suspense>
            }>
            </Route>
            <Route path="/cart" element={
                <Suspense>
                    <CartPage />
                </Suspense>
            }>
            </Route>
        </Routes>
    );
};

export default AppRouter;
