import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import Img1 from '../../assets/customer-reviews/reviews/1_img.jpg'
import Img2 from '../../assets/customer-reviews/reviews/2_img.jpg'
import Img3 from '../../assets/customer-reviews/reviews/3_img.jpg'
import Img4 from '../../assets/customer-reviews/reviews/4_img.jpg'
import Img5 from '../../assets/customer-reviews/reviews/5_img.jpg'
import Img6 from '../../assets/customer-reviews/reviews/6_img.jpg'

import Video1 from '../../assets/customer-reviews/reviews/1.mp4'
import Video2 from '../../assets/customer-reviews/reviews/2.mp4'
import Video3 from '../../assets/customer-reviews/reviews/3.mp4'
import Video4 from '../../assets/customer-reviews/reviews/4.mp4'
import Video5 from '../../assets/customer-reviews/reviews/5.mp4'
import Video6 from '../../assets/customer-reviews/reviews/6.mp4'

import NavigationBar from '../home/navigationBar'
import GalleryModal from './galleryModal'
import '../../css/body/customerReviews/customerReviews.css'

class customerReviews extends Component {
    constructor(props){
        super(props)
        this.state={
            filteredModal:[],
            reviews:[
                {
                    id: 1,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "I just purchased Iphone Xr with 2 phone cases, great service come on down to get you one, bring your friends and family",
                    image: Img1,
                    video: Video1,
                    date: "05-06-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 2,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "came to whole cell accessories to get my daughter a phone for her birthday, leaving with 2 phones thanks to all, customer service is great and will recommend it to anyone",
                    image: Img2,
                    video: Video2,
                    date: "05-06-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 3,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "just want everybody know to come to accessories for tablets, staff takes care of you come see them",
                    image: Img3,
                    video: Video3,
                    date: "05-07-2020",
                    store: "Whole Cell Accessories"
                },
                {
                    id: 4,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "please come on down to boost mobile store, if you have any trouble with the phone or looking for a good deal they'll take care of you",
                    image: Img4,
                    video: Video4,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 5,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "I'm here at boost mobile in Lansing just got my new phone man, great service, great people, come on down to check them out",
                    image: Img5,
                    video: Video5,
                    date: "05-07-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 6,
                    firstname: "Boost",
                    lastname: "Customer",
                    desc: "I just wanna give shout out to my boost people here in Lansing you know they hook me up with the phone and they got nice deals, nice employees here and I recommend that you go there",
                    image: Img6,
                    video: Video6,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                }
            ]
        }
    }

    toggleVideoModal = (id) => {
        this.setState({
            filteredModal: this.state.reviews.filter(review => 
                review.id === id
                )
        })
        document.getElementById('customer-reviews-modal').style.display="block"
        document.body.style.overflow="hidden"
    }

    clearState = () => {
        this.setState({
            filteredModal: null
        })
    }
    render() {
        let settings = {
            infinite: false,
            speed: 1000,
            arrows:true,
            slidesToShow: 4,
            slidesToScroll: 4,
        
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
              {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
              breakpoint: 800,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
          ]
        }
        return (
            <div className="customer-reviews">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <NavigationBar />
                        <div className="content">
                            <h1>Customer Reviews</h1>
                            <div className="reviews-slider">
                                {this.state.reviews.length===0?(
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ):(
                                    <Slider {...settings}>
                                    {this.state.reviews.map((review,key)=>(
                                            <div className="out" key={review.id}>
                                            <div key={key} className="video-container">
                                                <img className="video" src={review.image} alt="reviews"/>
                                                <div className="video-wrapper" onClick={() => this.toggleVideoModal(review.id)}><i className="far fa-play-circle video-icon"></i></div>
                                            </div>
                                                {/* <img alt={"reviews"} src={review.image}/> */}
                                            </div>
                                        ))}
                                    </Slider>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="customer-reviews-modal">
                    <GalleryModal 
                    filteredModal= {this.state.filteredModal}
                    clearState={this.clearState}
                    />
                </div>
            </div>
        )
    }
}

export default customerReviews
