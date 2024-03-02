//Lấy các thẻ thuộc thông tin cá nhân
//sự kiện click cho button kiểm tra nhập đúng định dạng email sẽ
//hiển thị thông tin cá nhân
const nhapEmailDiv = document.querySelector(".nhapEmailDiv");
const outputThongTin = document.querySelector(".outputThongTin");
const btnEmail = document.querySelector(".btnEmail");
const inputEmail = document.querySelector(".inputText");
//check giá trị nhập vào khi click button
const emailCheck =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const checkEmail = function () {
  let email = inputEmail.value;
  console.log(emailCheck.test(email));
  if (emailCheck.test(email)) {
    nhapEmailDiv.classList.add("hidden-js");
    outputThongTin.classList.remove("hidden-js");
  } else {
    alert("Đã nhập sai email!Vui lòng nhập lại");
  }
};
btnEmail.addEventListener("click", checkEmail);

//sự kiện cho phần kinh nghiêm và cá thẻ liên quan
//bắt sự kiện hover khi di chuột vào các vùng thẻ, hiện viewMore
const cardKinhNghiem = document.querySelector(".cardKinhNghiem");
const cardSoThich = document.querySelector(".cardSoThich");
const cardHoatDong = document.querySelector(".cardHoatDong");
const cardHocVan = document.querySelector(".cardHocVan");
const cardNgonNgu = document.querySelector(".cardNgonNgu");
const cardKyNang = document.querySelector(".cardKyNang");
const viewMore = document.querySelectorAll(".viewMore");
//liên két nội dung thẻ
const kinhNghiemNd = document.querySelector(".kinhNghiemNd");
const soThichNd = document.querySelector(".soThichNd");
const hoatDongNd = document.querySelector(".hoatDongNd");
const hocVanNd = document.querySelector(".hocVanNd");
const ngonNguNd = document.querySelector(".ngonNguNd");
const kyNangNd = document.querySelector(".kyNangNd");

//đánh dấu ô được chuột di vào
let numberCard;
//function hover
const viewMoreOutput = function () {
  viewMore[numberCard].classList.remove("hidden-js");
  // console.log(viewMore[numberCard].innerHTML);
  viewMore[numberCard].onclick = function () {
    if (viewMore[numberCard].textContent.includes("more")) {
      viewMore[numberCard].innerHTML = "&#9650; View less";
      if (numberCard == 0) {
        kinhNghiemNd.classList.remove("hidden-js");
      } else if (numberCard == 1) {
        soThichNd.classList.remove("hidden-js");
      } else if (numberCard == 2) {
        hoatDongNd.classList.remove("hidden-js");
      } else if (numberCard == 3) {
        hocVanNd.classList.remove("hidden-js");
      } else if (numberCard == 4) {
        ngonNguNd.classList.remove("hidden-js");
      } else if (numberCard == 5) {
        kyNangNd.classList.remove("hidden-js");
      }
    } else {
      viewMore[numberCard].innerHTML = "&#9660; View more";
      if (numberCard == 0) {
        kinhNghiemNd.classList.add("hidden-js");
      } else if (numberCard == 1) {
        soThichNd.classList.add("hidden-js");
      } else if (numberCard == 2) {
        hoatDongNd.classList.add("hidden-js");
      } else if (numberCard == 3) {
        hocVanNd.classList.add("hidden-js");
      } else if (numberCard == 4) {
        ngonNguNd.classList.add("hidden-js");
      } else if (numberCard == 5) {
        kyNangNd.classList.add("hidden-js");
      }
    }
  };
};

const viewMoreDel = function () {
  if (viewMore[numberCard].textContent.includes("more")) {
    viewMore[numberCard].classList.add("hidden-js");
    // console.log("delete viewMore");
  }
};

//sự kiện hover
cardKinhNghiem.onmouseover = function () {
  numberCard = 0;
  viewMoreOutput();
};
cardSoThich.onmouseover = function () {
  numberCard = 1;
  viewMoreOutput();
};
cardHoatDong.onmouseover = function () {
  numberCard = 2;
  viewMoreOutput();
};
cardHocVan.onmouseover = function () {
  numberCard = 3;
  viewMoreOutput();
};
cardNgonNgu.onmouseover = function () {
  numberCard = 4;
  viewMoreOutput();
};
cardKyNang.onmouseover = function () {
  numberCard = 5;
  viewMoreOutput();
};

//sự kiện mouseOut
cardKinhNghiem.onmouseout = function () {
  numberCard = 0;
  viewMoreDel();
};
cardSoThich.onmouseout = function () {
  numberCard = 1;
  viewMoreDel();
};
cardHoatDong.onmouseout = function () {
  numberCard = 2;
  viewMoreDel();
};
cardHocVan.onmouseout = function () {
  numberCard = 3;
  viewMoreDel();
};
cardNgonNgu.onmouseout = function () {
  numberCard = 4;
  viewMoreDel();
};
cardKyNang.onmouseout = function () {
  numberCard = 5;
  viewMoreDel();
};
