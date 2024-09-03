"use client";

import { getSettings, getSeoSettings, hireUs, getProducts, contactUs, getTestimonials, getTeamMembers, careerMail, getVacancies, customisationMail, getBlogs, getCategories, getProductsDetails, getBLogsCategories } from "@/utils/api";
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
    content_id = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getProducts(page, category_id, slug, product_filter, content_id),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// // GET PRODUCTS-DETAILS
export const GetProductsDetailsApi = ({
    slug = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getProductsDetails(slug),
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
    product = '',
    country = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...contactUs(name, email, subject, phone, message, product, country),
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

// customisation Email
export const customisationApi = ({
    user_name = '',
    contact = '',
    email = '',
    product_name = '',
    requirement_file = '',
    requirement_explanation = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { },
}) => {
    store.dispatch(
        apiCallBegan({
            ...customisationMail(user_name, contact, email, product_name, requirement_file, requirement_explanation),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};


// // GET BLOGS
export const GetBlogsApi = ({
    id = '',
    category_id = '',
    subcategory_id = '',
    slug = '',
    category_slug = '',
    subcategory_slug = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getBlogs(id, category_id, subcategory_id, slug, category_slug, subcategory_slug),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// GET BLOGS CATEGORIES
export const GetBlogsCategoriesApi = ({
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getBLogsCategories(),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// GET CATEGORIES
export const GetCategoriesApi = ({
    slug = '',
    onSuccess = () => { },
    onError = () => { },
    onStart = () => { } }) => {
    store.dispatch(
        apiCallBegan({
            ...getCategories(slug,),
            displayToast: false,
            onStart,
            onSuccess,
            onError,
        })
    );
};



