import axiosClient from "./axiosClient";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP06",
      },
    });
  },

  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getShowTimesDetails: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },

  GetCumRapDetails: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP06",
      },
    })},


  addMovie: (movie) => {
    // Đối với dữ liệu có định dạng đặc biệt như File,...
    // Ta cần phải tạo ra FormData để lưu trữ
    const formData = new FormData();
    // Duyệt qua từng thuộc tính trong object movie và thêm vào formData
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP01");

    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
  },

};

export default movieAPI;
