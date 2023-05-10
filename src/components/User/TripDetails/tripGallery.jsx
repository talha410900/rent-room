import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const gallery = [
    {
        picture:
            "https://admin-rentroom.rentcubo.info/uploads/hosts/fbc36be83d948e3ae0a36bda02ad40259c64fe34.jpg",
        caption: ""
    },
    {
        picture:
            "https://admin-rentroom.rentcubo.info/uploads/hosts/659313dd56c6bb4ec176653b3464ab25a84ae087.jpg",
        caption: ""
    },
    {
        picture:
            "https://admin-rentroom.rentcubo.info/uploads/hosts/a00f3c82de7617e8e2aa5604bcf9ee0f1c235d63.jpg",
        caption: ""
    }
];

class TripGallery extends Component {
    state = {};
    render() {
        const { details } = this.props;
        return (
            <div className="modal fade" id="image-gal">
                <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        id="close-login"
                        data-dismiss="modal"
                    >
                        <i className="material-icons">close</i>
                    </button>
                </div>

                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div id="" className="fullscreen">
                                <Carousel
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    showStatus={false}
                                >
                                    {details.gallery.map(image => (
                                        <div key={image.picture}>
                                            <img
                                                srcSet={image.picture}
                                                src={image.picture}
                                                alt={image.picture}
                                                className="homes-img"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripGallery;
