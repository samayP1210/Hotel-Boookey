let data = [
  {
    name: "Taj Mahal Palace",
    imgs: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/83694421.jpg?k=4d2d122c292ab267f157a1722f923705d64e69b118c11b9e04c4abcc505e8676&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/294124204.jpg?k=67967c246786175e52196f1bb173fda0ec8ad422e54e48d41b7cdc161cbba93b&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305829564.jpg?k=4af13a6492e5fb82008466e177e9c3cf1dd24de519020740379620a6f6d6fdd1&o=&hp=1",
    ],
    city: "Mumbai",
    star: 5,
    rating: 4.7,
    count: 543,
    comments: [
      {
        author: "Rahul",
        comment: "A truly luxurious experience.",
      },
      {
        author: "Neha",
        comment: "Great service and stunning views.",
      },
    ],
    price: { basePrice: 5987, perDayPrice: 1632 },
  },
  {
    name: "Leela Palace",
    imgs: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/166432849.jpg?k=f007812739d4466c610739f5f4eb6b214fa235c5b80f56f69a7c304ff4a8a8fc&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291848399.jpg?k=d6e44fc3c777697496eed187fab117d44a8e4073585c168efcb4b20bfee8528b&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/166430694.jpg?k=741fb30f005e8b48e50f65c85a477cb3af08c13a5bc5303fbfd407a4485701fe&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/166635371.jpg?k=c47680b6224a844734107c4a07d740a75b8e2a23bc992d6d2b0f47e430178f25&o=&hp=1",
    ],
    city: "Bangalore",
    star: 5,
    rating: 4.8,
    count: 621,
    comments: [
      {
        author: "Siddharth",
        comment: "Exquisite interiors and fantastic food.",
      },
      {
        author: "Priya",
        comment: "Perfect for a romantic getaway.",
      },
    ],
    price: { basePrice: 3857, perDayPrice: 975 },
  },
  {
    name: "Oberoi Udaivilas",
    imgs: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/422171329.jpg?k=ad345ded3eb0c72553f92f56ea7dbef949d437cc59fc09cccf0b8dcfa42f5258&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/422169993.jpg?k=0325a0258399d6f74ff12ac9e461d0de33d76adc8d1664281cec9179b0762f07&o=&hp=1",
    ],
    city: "Udaipur",
    star: 5,
    rating: 4.9,
    count: 412,
    comments: [
      {
        author: "Vikram",
        comment: "A royal experience by the lake.",
      },
      {
        author: "Anita",
        comment: "Incredible attention to detail.",
      },
    ],
    price: { basePrice: 8752, perDayPrice: 984 },
  },
  {
    name: "ITC Grand Chola",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/4c/5b/b105fca0934f7bab7ea78c442f7c7fa3e96775ee7af9eafec86f9131ac7d.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d7/ee/8365ac8da9a3daf2ceac96b35fceb9c7cee3f9106113a87e8f198835dae7.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/39/e3/c24e312c684a5e3a277b022406dc7b5b4169de5492f2da26aef87eae64b5.jpeg",
    ],
    city: "Chennai",
    star: 5,
    rating: 4.6,
    count: 385,
    comments: [
      {
        author: "Karthik",
        comment: "Impressive architecture and top-notch service.",
      },
      {
        author: "Saranya",
        comment: "Great for business travelers.",
      },
    ],
    price: { basePrice: 6580, perDayPrice: 1946 },
  },
  {
    name: "The Lalit",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/f7/6d/9b67a909f067e6668e105697e68f992131954998be6cf4f3d504c4b3b022.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ba/48/943a969fe62bca560359a636d88a3aaf131dbb777338ba444d6e2cf50a8d.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/43/8a/44f06d3235f8b0b12862663c52652cb3126a3da36336f5b188b21d03fad9.jpeg",
    ],
    city: "New Delhi",
    star: 5,
    rating: 4.5,
    count: 498,
    comments: [
      {
        author: "Arjun",
        comment: "Elegant and comfortable stay.",
      },
      {
        author: "Pooja",
        comment: "Excellent dining options.",
      },
    ],
    price: { basePrice: 765, perDayPrice: 213 },
  },
  {
    name: "Radisson Blu",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/9e/49/ecd2c70d4825a1ce478bf442a4e348d44ec58291e41b53053aa25fbbbbb3.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/2b/f1/2d30f856043bf028f0a47844e27c07b676cc1a92dbb4bec1842e4937178a.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/a1/ef/6f908182d162df40221aba7427fdbb5a33e287cebd63bed16a1b1ff35464.jpeg",
    ],
    city: "Jaipur",
    star: 4,
    rating: 4.2,
    count: 267,
    comments: [
      {
        author: "Rajesh",
        comment: "Affordable luxury in the Pink City.",
      },
      {
        author: "Shweta",
        comment: "Good value for money.",
      },
    ],
    price: { basePrice: 7852, perDayPrice: 675 },
  },
  {
    name: "Grand Hyatt",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d6/16/06a2664ac9b49238e3de94aa0cc74eb0d58d8e60b982757e1384d021c18d.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/07/3a/78235a424f3ef6835f29a6ec281dd0b6cc30ed071b01581afcdd539449c0.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ef/8a/59218565c5e82ff95a7f6625db60cb6bc9854ba9349f9c17ed74bb95004e.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ac/90/11e3ff4ee9063cb2d36dcda2fae36405ef77181ffe3265690d3e990305ad.jpeg",
    ],
    city: "Goa",
    star: 5,
    rating: 4.4,
    count: 316,
    comments: [
      {
        author: "Suresh",
        comment: "Perfect beachfront location.",
      },
      {
        author: "Anjali",
        comment: "Great pool and spa.",
      },
    ],
    price: { basePrice: 10574, perDayPrice: 4931 },
  },
  {
    name: "Marriott Resort & Spa",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d9/19/9ca96d814345f619a5fa87e54a600039d063b0e433c57bddb62e8b9e05ae.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/66/39/aac94c1dc38705d76256d7786da17d291ae5c6dbed59a33d52a5a8567659.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d9/4b/57ff8a731ced27f74c0927135bb3edbf33953a1c4faa92a7824a2462750c.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/4e/45/27a2e2914220f29e2d82e44d5fff6cda7d64a6eb99302902b42a471b06e5.jpeg",
    ],
    city: "Kolkata",
    star: 4,
    rating: 4.1,
    count: 189,
    comments: [
      {
        author: "Amit",
        comment: "Relaxing and enjoyable stay.",
      },
      {
        author: "Preeti",
        comment: "Friendly staff and delicious breakfast.",
      },
    ],
    price: { basePrice: 3878, perDayPrice: 550 },
  },
  {
    name: "The Oberoi Amarvilas",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/33/64/6f83062cc703fe25b62e1aed94e0c2bc174d3ae637f2d133940986e47c3c.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/02/a0/82e3aeeea127b4da69230a946ad4d982a6326c9b72aec5597be3aa5029b5.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/8f/d2/af29203d14561391e9d8cf7d9937eb6470323f262f2d343efadbc42b589d.jpeg",
    ],
    city: "Agra",
    star: 5,
    rating: 4.9,
    count: 542,
    comments: [
      {
        author: "Rohit",
        comment: "Unmatched view of the Taj Mahal.",
      },
      {
        author: "Ritu",
        comment: "Luxury at its best.",
      },
    ],
    price: { basePrice: 1878, perDayPrice: 658 },
  },
  {
    name: "Hyatt Regency",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d6/67/952a30ae9feda77a8d7818cc8a879fd903c240fcde5b9fcc5c7d3b9441f5.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/41/e9/67cc8ee225b8540887e681f15110c038a528dd39ec34cfcaebb80ab94135.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ea/8b/8644d78f21d1e8d0f593f53ab01cbe4f6fe7ced154a8b8654e73188d4fbd.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/f5/14/7ac4cf638bbf8c5dd575b4a873928063b292ceaa829a588c25878d116f54.jpeg",
    ],
    city: "Pune",
    star: 4,
    rating: 4.3,
    count: 275,
    comments: [
      {
        author: "Vivek",
        comment: "Comfortable stay for business travelers.",
      },
      {
        author: "Sonal",
        comment: "Great conference facilities.",
      },
    ],
    price: { basePrice: 3085, perDayPrice: 517 },
  },
  {
    name: "Mysore Palace View Hotel",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/46/71/867908cd5d55407789ecaf53f869655dbe23907b792fc033ec85b001a3ab.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/a3/fe/796f35fdaa45fe03c41c891143d8b46d930cc47ea51a2fd516a74315db29.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/c0/f1/360e029568c01ffac4eb5fab88403b4f57f1074ec1f79cfee926415c0bd2.jpeg",
    ],
    city: "Mysore",
    star: 3,
    rating: 3.9,
    count: 148,
    comments: [
      {
        author: "Manoj",
        comment: "Great value for money with a view of the palace.",
      },
      {
        author: "Sangeeta",
        comment: "Convenient location for sightseeing.",
      },
    ],
    price: { basePrice: 6188, perDayPrice: 254 },
  },
  {
    name: "Rajputana Heritage Resort",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/91/a7/494819b02b007049539e8985bf24f5b0fcd4a908e927f943358fbaaeb5ea.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/c6/df/fd0b804945bdeaf6d7c454090e92d268d4ae00ced460de0a3616abcb3055.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/4d/5b/d7f1600b9154943efb957bb2c016a8aaa4a429205843c43fef365b7b4379.jpeg",
    ],
    city: "Jodhpur",
    star: 4,
    rating: 4.0,
    count: 192,
    comments: [
      {
        author: "Arun",
        comment: "A blend of modern comfort and Rajasthani culture.",
      },
      {
        author: "Anita",
        comment: "Loved the traditional Rajasthani cuisine.",
      },
    ],
    price: { basePrice: 9668, perDayPrice: 122 },
  },
  {
    name: "Himalayan Heights Lodge",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/09/c2/37e325c9f153dc17a555af04331bfb5555ddeade096fdce2f0c059550d9e.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/f6/3d/9c305389df2849ca37b3905de72bcaa7820589dc838c11b2a4068f8d3a7b.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ad/8d/079a660f7236b1c45ec7d9e49449dd788a859d8c3ac8dbbc107145151f9a.jpeg",
    ],
    city: "Shimla",
    star: 3,
    rating: 3.5,
    count: 89,
    comments: [
      {
        author: "Rajat",
        comment: "Cozy retreat in the hills with a beautiful view.",
      },
      {
        author: "Kavita",
        comment: "Perfect for a peaceful getaway.",
      },
    ],
    price: { basePrice: 3155, perDayPrice: 351 },
  },
  {
    name: "Backwaters Bliss Resort",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/cd/a2/5d1f34c6095ca4b8bb49d159e6f81884ac9e8dceb0430a37ccb571a4f588.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/4f/50/956f00abe2bb4b93fe1ef129611645d288e0407495776c3587b97fd28387.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/73/55/34fabec4831c3695243dc1db03255a928bfd7064a4959865a6ee7d0e8559.jpeg",
    ],
    city: "Kochi",
    star: 4,
    rating: 4.2,
    count: 156,
    comments: [
      {
        author: "Suresh",
        comment: "Scenic beauty and serene backwaters.",
      },
      {
        author: "Riya",
        comment: "Ideal for nature lovers.",
      },
    ],
    price: { basePrice: 9868, perDayPrice: 198 },
  },
  {
    name: "Bengaluru Tech Hub Hotel",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/2c/9b/84354fcdf07b4cd22efabd1928963771d86d45ab9fa5ef0e278c707b5835.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/e8/64/d151427adfb39b08ddfb17e2334c00c1176f08e095a0e00fa426e12de9f2.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/56/ac/134c2a3ddd4e24cd773bf25cb0061b9430aa6e211c282d410ac9c92673c5.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/57/6b/920a7850839a30d7506e1ff8d3ea4b2403326c056e562c195658b5db597f.jpeg",
    ],
    city: "Bengaluru",
    star: 3,
    rating: 3.8,
    count: 215,
    comments: [
      {
        author: "Rahul",
        comment: "Convenient for business travelers.",
      },
      {
        author: "Nisha",
        comment: "Good budget option near tech parks.",
      },
    ],
    price: { basePrice: 5687, perDayPrice: 210 },
  },
  {
    name: "The Pink City Inn",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/49/b8/220fe80e857b03683ad4b9738430c4a498de16113eb2643ff6330f6224fc.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/96/08/1c5d8deb11fc83bbef5def5c2b208de5644b46cc2d52f399bdb1c0c276fa.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/27/94/6f524687ecaa84a4a7c25498794b4962f9e1781b26163c0102e0fef52d39.jpeg",
    ],
    city: "Jaipur",
    star: 3,
    rating: 3.7,
    count: 174,
    comments: [
      {
        author: "Aditi",
        comment: "Affordable stay in the heart of Jaipur.",
      },
      {
        author: "Alok",
        comment: "Exploring Jaipur's history was a breeze from here.",
      },
    ],
    price: { basePrice: 3187, perDayPrice: 325 },
  },
  {
    name: "Beachfront Paradise Resort",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/82/c8/71b8d29ec168c8c2802c2b9382409811e89a7139db4201bfe5fa19e2217e.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/8f/5f/42e09864ed8ea9ab1127a316e5b31828847512d97678e46384ab1cfbfbbb.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/3a/52/e102dbdf4b067ec65c6a7a9bea376fbba8ca04012bd52d94b7543d220362.jpeg",
    ],
    city: "Goa",
    star: 4,
    rating: 4.3,
    count: 276,
    comments: [
      {
        author: "Sara",
        comment: "Direct access to the beach and lively atmosphere.",
      },
      {
        author: "Rohit",
        comment: "Enjoyed the water sports and nightlife.",
      },
    ],
    price: { basePrice: 8874, perDayPrice: 571 },
  },
  {
    name: "Darjeeling Mountain Retreat",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/80/7a/6b8fa93672481e8c094c811674c6700d0d59f6ca8a5db94a906e8021cad1.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/24/51/dc5a95e5abbd870d3da38512dbe0b9f615ba405260eb25804aa460782eba.jpeg",
    ],
    city: "Darjeeling",
    star: 3,
    rating: 3.6,
    count: 132,
    comments: [
      {
        author: "Meera",
        comment: "Refreshing mountain air and stunning views.",
      },
      {
        author: "Rajesh",
        comment: "Close to tea gardens and local attractions.",
      },
    ],
    price: { basePrice: 4518, perDayPrice: 585 },
  },
  {
    name: "Agra Heritage Homestay",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/01/27/750427af38a363e192a4da30a825d4057ce6f12f89eb41ee563c15c2011f.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/cd/61/03f603f8028e7a6bcdd793709408a94109358e43fef4a3f3b4c45d8ac0be.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/d9/38/32e6ce94463afcadff307ebc19bdee622f677610815c0455700c4d19a521.jpeg",
    ],
    city: "Agra",
    star: 3,
    rating: 3.9,
    count: 108,
    comments: [
      {
        author: "Neha",
        comment: "Charming homestay with warm hospitality.",
      },
      {
        author: "Vivek",
        comment: "An authentic experience in Agra.",
      },
    ],
    price: { basePrice: 3157, perDayPrice: 156 },
  },
  {
    name: "Silicon Valley Suites",
    imgs: [
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/9a/57/32e27eabe0e10c0b2a5b08e742bd59ab9673480a910e2edadef7c53a0172.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ea/30/f350fb8a0781392688c98360b7ea92e3cadf407630ef35bfd7e1405664af.jpeg",
    ],
    city: "Bengaluru",
    star: 4,
    rating: 4.1,
    count: 199,
    comments: [
      {
        author: "Shreya",
        comment: "Comfortable stay with modern amenities.",
      },
      {
        author: "Amit",
        comment: "Convenient for tech professionals.",
      },
    ],
    price: { basePrice: 5817, perDayPrice: 4519 },
  },
];
export default data;
