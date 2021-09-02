import ImageGalleryItem from './ImageGalleryItem';
import FetchImageByAPI from './FetchImageByAPI';
import s from './Styles.Module.css';
import React, { Component } from 'react';
import Modal from './Modal';
import Button from './Button';

class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ currentPage: 1, images: [], error: null }, () =>
        this.fetchImg(),
      );
    }

    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImg = () => {
    const { currentPage } = this.state;
    const { query } = this.props;

    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    FetchImageByAPI(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

   toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  handleModalImage = url => {
    this.toggleModal();
    this.setState({ largeImageURL: url });
  }

  shouldRenderLoadMoreButton
  
  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0;

    return (
      <div>
        {error && <h1>Try again</h1>}
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onToggleModal={this.handleModalImage}
              largeImageURL={largeImageURL} />
          ))}
        </ul>

        {shouldRenderLoadMoreButton && (
          <Button onClick={this.fetchImg} isLoading={isLoading} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" style={{ width: 900 }} />
          </Modal>
        )}

      </div>
    );
  }
}

export default ImageGallery;
  
