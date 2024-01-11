"use client";

import { getSettings, getSeoSettings, hireUs, getProducts, contactUs, getTestimonials, getTeamMembers, careerMail, getVacancies } from "@/utils/api";
import { store } from "../store";
import { apiCallBegan } from "./apiActions";

// // GET SETTINGS
export const GetSettingsApi = ({
    type = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getSettings(type),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET SEO SETTINGS
export const GetSeoSettingsApi = ({
    type = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getSeoSettings(type),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET VACANCIES
export const GetVacanciesApi = ({
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getVacancies(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET PRODUCTS
export const GetProductsApi = ({
    page = '',
    category_id = '',
    slug = '',
    product_filter = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getProducts(page, category_id, slug, product_filter),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET TESTIMONIALS
export const GetTestimonialsApi = ({
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...getTestimonials(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET TEAMMEMBERS
export const GetTeamMembersApi = ({
    page = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...getTeamMembers(page),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// Career Email
export const careerMailApi = ({
    full_name = "",
    email = "",
    qualification = "",
    contact = "",
    apply_for = "",
    experience = "",
    file = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...careerMail(full_name, email, qualification, contact, apply_for, experience, file),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// ContactUs Email
export const contactUsApi = ({
    name = "",
    email = "",
    subject = "",
    phone = "",
    message = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...contactUs(name, email, subject, phone, message),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// HireUs Email
export const hireUsApi = ({
    name = "",
    email = "",
    budget = "",
    phone = "",
    message = "",
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...hireUs(name, email, budget, phone, message),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};





