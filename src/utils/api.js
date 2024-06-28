// import { store } from "@/store/store"

const GET_SETTINGS = "settings"
export const GET_SEO_SETTINGS = "seo-settings"
const HIRE_US = "hire-us"
const CONTACT_US = "contact-us"
export const GET_PRODUCTS = "products"
const GET_TESTIMONIALS = "testimonials"
const GET_TEAM_MEMBERS = "team-members"
const CAREER_MAIL = "send-career-email"
const GET_VACANCIES = "get-vacancies"
const CUSTOMISATION = "customisation-requirement"
const GET_BLOGS = "blogs"
const GET_CATEGORIES = "categories"

// GET SETTINGS
export const getSettings = (type) => {
    return {
        url: `${GET_SETTINGS}`,
        method: "GET",
        params: {
            type: type,
        },
        authorizationHeader: false,

    }
}

// GET SEO SETTINGS
export const getSeoSettings = (type) => {
    return {
        url: `${GET_SEO_SETTINGS}`,
        method: "GET",
        params: {
            type: type,
        },
        authorizationHeader: false,

    }
}
// GET VACANCIES
export const getVacancies = () => {
    return {
        url: `${GET_VACANCIES}`,
        method: "GET",
        params: {
        },
        authorizationHeader: false,

    }
}

// GET PRODUCTS
export const getProducts = (page, category_id, slug, product_filter, content_id) => {
    return {
        url: `${GET_PRODUCTS}`,
        method: "GET",
        params: {
            page: page,
            category_id: category_id,
            slug: slug,
            product_filter: product_filter,
            content_id: content_id

        },
        authorizationHeader: false,

    }
}

// GET TESTIMONAILS
export const getTestimonials = () => {
    return {
        url: `${GET_TESTIMONIALS}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// GET TEAMMEMBERS
export const getTeamMembers = (page) => {
    return {
        url: `${GET_TEAM_MEMBERS}`,
        method: "GET",
        params: {
            page,
        },
        authorizationHeader: false,

    }
}

//Send HireUs Mail
export const hireUs = (name, email, budget, phone, message) => {
    return {
        url: `${HIRE_US}`,
        method: "POST",
        data: {
            name: name,
            email: email,
            budget: budget,
            phone: phone,
            message: message,
        },
        authorizationHeader: false,

    }
}

//Send ContactUs Mail
export const contactUs = (name, email, subject, phone, message) => {
    return {
        url: `${CONTACT_US}`,
        method: "POST",
        data: {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            message: message,
        },
        authorizationHeader: false,

    }
}

//Send CareerMail
export const careerMail = (full_name, email, qualification, contact, apply_for, experience, file) => {
    let data = new FormData();
    data.append('full_name', full_name);
    data.append('email', email);
    data.append('qualification', qualification);
    data.append('contact', contact);
    data.append('apply_for', apply_for);
    data.append('experience', experience);
    data.append('file', file);
    return {
        url: `${CAREER_MAIL}`,
        method: "POST",
        data,
        authorizationHeader: false,

    }
}

//Send customisation Mail
export const customisationMail = (user_name, contact, email, product_name, requirement_file, requirement_explanation) => {
    let data = new FormData();
    data.append('user_name', user_name);
    data.append('contact', contact);
    data.append('email', email);
    data.append('product_name', product_name);
    data.append('requirement_file', requirement_file);
    data.append('requirement_explanation', requirement_explanation);
    return {
        url: `${CUSTOMISATION}`,
        method: "POST",
        data,
        authorizationHeader: false,

    }
}

// GET BLOGS
export const getBlogs = (id, category_id, subcategory_id, slug, category_slug, subcategory_slug) => {
    return {
        url: `${GET_BLOGS}`,
        method: "GET",
        params: {
            id: id,
            category_id: category_id,
            subcategory_id: subcategory_id,
            slug: slug,
            category_slug: category_slug,
            subcategory_slug: subcategory_slug
        },
        authorizationHeader: false,

    }
}

// GET CATEGORIES
export const getCategories = (slug) => {
    return {
        url: `${GET_CATEGORIES}`,
        method: "GET",
        params: {
            slug: slug,
        },
        authorizationHeader: false,

    }
}