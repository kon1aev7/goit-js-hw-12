import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import iconError from './img/error.png';

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');

loader.style.display = 'none';
loadMoreButton.style.display = 'none';

let query = '';
let page = 1;
const perPage = 15;
let lightbox;

form.addEventListener('submit', createGallery);
loadMoreButton.addEventListener('click', loadMoreImages);

async function createGallery(event) {
  event.preventDefault();
  loader.style.display = 'block';
  gallery.innerHTML = '';
  loadMoreButton.style.display = 'none';
  query = event.target.elements.text.value.trim();

  if (!query) {
    showError('Please write a query for search');
    loader.style.display = 'none';
    return;
  }

  page = 1;
  await fetchImages();
}

async function loadMoreImages() {
  page += 1;
  await fetchImages();
}

async function fetchImages() {
  loader.style.display = 'block';

  try {
    const data = await searchImages(query, page, perPage);

    if (data.totalHits === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      loadMoreButton.style.display = 'none';
      return;
    }

    renderGallery(data.hits);
    smoothScroll();

    if (page * perPage >= data.totalHits) {
      loadMoreButton.style.display = 'none';
      showError("We're sorry, but you've reached the end of search results.");
    } else {
      loadMoreButton.style.display = 'block';
    }

    form.reset();
  } catch (error) {
    showError('An unexpected error occurred. Please try again later.');
    loadMoreButton.style.display = 'none';
  } finally {
    loader.style.display = 'none';
  }
}

function showError(message) {
  iziToast.error({
    iconUrl: iconError,
    position: 'topRight',
    backgroundColor: '#EF4040',
    iconColor: '#FAFAFB',
    imageWidth: 24,
    messageColor: '#FAFAFB',
    message: message,
  });
}

function renderGallery(images) {
  const markup = createMarkup(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  initLightbox();
}

function initLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      animationSpeed: 250,
      className: 'simpl-lightbox',
    });
  } else {
    lightbox.refresh();
  }
}

function smoothScroll() {
  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}