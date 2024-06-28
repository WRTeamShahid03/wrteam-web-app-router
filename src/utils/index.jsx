export const placeholderImage = (e) => {
  e.target.src = "../Asset/Images/teamDefaultImg.png";
};

export const formatDate = (data) => {
  return new Date(data).toLocaleString('en-us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

}

export const extractTextFromHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

// minute read
export const calculateReadTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
};
