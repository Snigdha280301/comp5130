import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const register = catchAsyncErrors(async (req, res, next) => {});
export const login = catchAsyncErrors(async (req, res, next) => {});
export const logout = catchAsyncErrors(async (req, res, next) => {});
export const myProfile = catchAsyncErrors(async (req, res, next) => {});