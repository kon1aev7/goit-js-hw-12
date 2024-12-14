export function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="img-item">
          <a class="gallery-link" href="${largeImageURL}">
          <img 
              class="gallery-image" 
              src=${webformatURL} 
              alt="${tags}" width=360 height=152
              />
      </a>
          <ul class="list-text">
            <li class="item-text">
              <h2 class="title-img">Likes</h2>
              <p class="text-info">${likes}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Views</h2>
              <p class="text-info">${views}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Comments</h2>
              <p class="text-info">${comments}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Downloads</h2>
              <p class="text-info">${downloads}</p>
            </li>
          </ul>
        </li>`;
      }
    )
    .join('');
}