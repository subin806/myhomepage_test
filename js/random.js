
        const lunchMenu = [
            { img: '../image/돈까스.jpg', name: "티파니 돈까스", price: "8000원", location: "부산 부산진구 서면로 56" },
            { img: '../image/짜장면.jpg', name: "홍콩반점 짜장면", price: "6500원", location: "부산 부산진구 가야대로784번길 27" },
            { img: '../image/연어덮밥.jpg', name: "마마돈 연어덮밥", price: "15500원", location: "부산 부산진구 전포대로209번길 39-9 1층" },
            { img: '../image/밀면.jpg', name: "서면개금밀면 밀면", price: "7500원", location: "부산 부산진구 서면로68번길 39" },
            { img: '../image/샌드위치.jpg', name: "서브웨이 샌드위치", price: "9500원", location: "부산 부산진구 가야대로784번길 23" },
            { img: '../image/순두부.jpg', name: "북창동 순두부", price: "10500원", location: "부산 부산진구 서면로 57 2층" },
            { img: '../image/알밥.jpg', name: "우정 치즈알밥", price: "8000원", location: "부산 부산진구 동천로85번길 3" },
            { img: '../image/햄버거.jpg', name: "맥도날드 햄버거", price: "6000원", location: "부산 부산진구 Location" }
        ];

        function randomMenu() {
            const randomIndex = Math.floor(Math.random() * lunchMenu.length);
            const selectedMenu = lunchMenu[randomIndex];

            var result = document.querySelector('#result');

            result.style.backgroundImage = 'url(' + selectedMenu.img + ')';
            menuName.textContent = selectedMenu.name;
            menuPrice.textContent = selectedMenu.price;
            menuLocation.textContent = selectedMenu.location;
        }

