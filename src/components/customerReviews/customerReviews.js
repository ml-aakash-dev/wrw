import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import Img1 from '../../assets/customer-reviews/reviews/1.jpg'
import Img2 from '../../assets/customer-reviews/reviews/2.jpg'
import Img3 from '../../assets/customer-reviews/reviews/3.jpg'
import Img4 from '../../assets/customer-reviews/reviews/4.jpg'
import Img5 from '../../assets/customer-reviews/reviews/5.jpg'
import Img6 from '../../assets/customer-reviews/reviews/6.jpg'
import Img7 from '../../assets/customer-reviews/reviews/7.jpg'
import Img8 from '../../assets/customer-reviews/reviews/8.jpg'
import Img9 from '../../assets/customer-reviews/reviews/9.jpg'
import Img10 from '../../assets/customer-reviews/reviews/10.jpg'
import Img11 from '../../assets/customer-reviews/reviews/11.jpg'
import Img12 from '../../assets/customer-reviews/reviews/12.jpg'
import Img13 from '../../assets/customer-reviews/reviews/13.jpg'
import Img14 from '../../assets/customer-reviews/reviews/14.jpg'
import Img15 from '../../assets/customer-reviews/reviews/15.jpg'
import Img16 from '../../assets/customer-reviews/reviews/16.jpg'
import Img17 from '../../assets/customer-reviews/reviews/17.jpg'
import Img18 from '../../assets/customer-reviews/reviews/18.jpg'
import Img19 from '../../assets/customer-reviews/reviews/19.jpg'
import Img20 from '../../assets/customer-reviews/reviews/20.jpg'
import Img21 from '../../assets/customer-reviews/reviews/21.jpg'
import Img22 from '../../assets/customer-reviews/reviews/22.jpg'
import Img23 from '../../assets/customer-reviews/reviews/23.jpg'
import Img24 from '../../assets/customer-reviews/reviews/24.jpg'
import Img25 from '../../assets/customer-reviews/reviews/25.jpg'
import Img26 from '../../assets/customer-reviews/reviews/26.jpg'
import Img27 from '../../assets/customer-reviews/reviews/27.jpg'
import Img28 from '../../assets/customer-reviews/reviews/28.jpg'
import Img29 from '../../assets/customer-reviews/reviews/29.jpg'
import Img30 from '../../assets/customer-reviews/reviews/30.jpg'

import Video1 from '../../assets/customer-reviews/reviews/1.mp4'
import Video2 from '../../assets/customer-reviews/reviews/2.mp4'
import Video3 from '../../assets/customer-reviews/reviews/3.mp4'
import Video4 from '../../assets/customer-reviews/reviews/4.mp4'
import Video5 from '../../assets/customer-reviews/reviews/5.mp4'
import Video6 from '../../assets/customer-reviews/reviews/6.mp4'
import Video7 from '../../assets/customer-reviews/reviews/7.mp4'
import Video8 from '../../assets/customer-reviews/reviews/8.mp4'
import Video9 from '../../assets/customer-reviews/reviews/9.mp4'
import Video10 from '../../assets/customer-reviews/reviews/10.mp4'
import Video11 from '../../assets/customer-reviews/reviews/11.mp4'
import Video12 from '../../assets/customer-reviews/reviews/12.mp4'
import Video13 from '../../assets/customer-reviews/reviews/13.mp4'
import Video14 from '../../assets/customer-reviews/reviews/14.mp4'
import Video15 from '../../assets/customer-reviews/reviews/15.mp4'
import Video16 from '../../assets/customer-reviews/reviews/16.mp4'
import Video17 from '../../assets/customer-reviews/reviews/17.mp4'
import Video18 from '../../assets/customer-reviews/reviews/18.mp4'
import Video19 from '../../assets/customer-reviews/reviews/19.mp4'
import Video20 from '../../assets/customer-reviews/reviews/20.mp4'
import Video21 from '../../assets/customer-reviews/reviews/21.mp4'
import Video22 from '../../assets/customer-reviews/reviews/22.mp4'
import Video23 from '../../assets/customer-reviews/reviews/23.mp4'
import Video24 from '../../assets/customer-reviews/reviews/24.mp4'
import Video25 from '../../assets/customer-reviews/reviews/25.mp4'
import Video26 from '../../assets/customer-reviews/reviews/26.mp4'
import Video27 from '../../assets/customer-reviews/reviews/27.mp4'
import Video28 from '../../assets/customer-reviews/reviews/28.mp4'
import Video29 from '../../assets/customer-reviews/reviews/29.mp4'
import Video30 from '../../assets/customer-reviews/reviews/30.mp4'

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
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "shout out to boost in Lansing, come get your phone, service is execellent here they hook me up",
                    image: Img5,
                    video: Video5,
                    date: "05-08-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 6,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "these guys help me so many times and they are very helpful, usually in and out here is quick, I love this guy thanks for taking care of me",
                    image: Img6,
                    video: Video6,
                    date: "05-09-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 7,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "They gave me a great deal and the man himself personally delivered it to my door",
                    image: Img7,
                    video: Video7,
                    date: "05-12-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 8,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thank you for your service today, you kept the customer happy",
                    image: Img8,
                    video: Video8,
                    date: "05-27-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 9,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I wanna thank T.J today, he actually went extra step, which rarely happens, to help me get less charge, I'm so thankful",
                    image: Img9,
                    video: Video9,
                    date: "05-28-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 10,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Boost Mobile Store did such a good job, got stylo it looks pretty, thank you all",
                    image: Img10,
                    video: Video10,
                    date: "05-29-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 11,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "had a real serious issue, T.J helped me out, i'm leaving as satisfied customer, boost always helps me out specially T.J",
                    image: Img11,
                    video: Video11,
                    date: "05-29-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 12,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hey, I'm in a boost store, this is a nice boost store i've been in, gave me my stylo 6, thanks guys",
                    image: Img12,
                    video: Video12,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 13,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hi, I'm here at boost mobile in Lansing, they have great customer service, good prices, recommended to anyone",
                    image: Img13,
                    video: Video13,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 14,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "hi, I'm here at boost store in Joliet, they got good service and good prices, thank you",
                    image: Img14,
                    video: Video14,
                    date: "05-30-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 15,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I wanna thanks this boost customer service, they gave me 8 plus, quality service, and treated me as a nice human being, God bless you",
                    image: Img15,
                    video: Video15,
                    date: "06-02-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 16,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I am here at boost, T.J helped me get a phone, they are very well, great service, and I appreciate that",
                    image: Img16,
                    video: Video16,
                    date: "06-03-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 17,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Excellent Service, great guys, real good service, we like the service, will shop again",
                    image: Img17,
                    video: Video17,
                    date: "06-03-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 18,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hi, We are at Boost Mobile in Schmidt, they gave us the best service ever for me and my sister, we bought phones today, please stop by if you get a chance, you will have a good deal thanks",
                    image: Img18,
                    video: Video18,
                    date: "06-04-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 19,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Boost Mobile in Lansing, and they gave me great service, got my new phone",
                    image: Img19,
                    video: Video19,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 20,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I'm a customer of Boost Mobile, and this is my spot",
                    image: Img20,
                    video: Video20,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 21,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to buy 2 phones and they gave me a real good deal",
                    image: Img21,
                    video: Video21,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 22,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I got the new Iphone 11, she helped me hook everything up, my experience here was great, awesome thank you",
                    image: Img22,
                    video: Video22,
                    date: "06-05-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 23,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "T.J took care of me, Boost Mobile I have been a loyal customer for 17/18 years",
                    image: Img23,
                    video: Video23,
                    date: "06-06-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 24,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "they got great deals on phones, boom box and anything else",
                    image: Img24,
                    video: Video24,
                    date: "06-22-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 25,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Hello, First time customer, I switched from Verizon to Boost Mobile, I'm really glad, people are really helpful, God bless your employees, I want more people like them",
                    image: Img25,
                    video: Video25,
                    date: "06-23-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 26,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to this boost today, to get an update on my phone, the services are great, I'm satisfied and happy",
                    image: Img26,
                    video: Video26,
                    date: "06-24-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 27,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "We are at Boost Mobile, and it was pleasure, service is great, 'Ali' did a great job, will take care of you",
                    image: Img27,
                    video: Video27,
                    date: "06-25-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 28,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I came to Bolingbrook Boost, I give 5 stars to the store, have a good day",
                    image: Img28,
                    video: Video28,
                    date: "06-25-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 29,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "Thank You got good deals today",
                    image: Img29,
                    video: Video29,
                    date: "06-26-2020",
                    store: "Boost Mobile"
                },
                {
                    id: 30,
                    firstname: "Whole Cell",
                    lastname: "Customer",
                    desc: "I want to thank you guys to help me get my phones today, good service, will definitely come back",
                    image: Img30,
                    video: Video30,
                    date: "06-26-2020",
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
