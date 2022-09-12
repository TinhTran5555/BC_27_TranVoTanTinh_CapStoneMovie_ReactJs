import React, { Fragment } from "react";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Overview = ({ movieId }) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!movie) {
    return null;
  }
  const StyleBackGround = {
    webkitTapHighlightColor: "transparent",
    display: "block",
    width: "100%",
    border: "0px",
    textDecoration: "none",
    color: "rgb(213, 215, 224)",
    borderRadius: "0px",
    backdropFilter: " blur(4px)",
    position: "relative",
    backgroundPosition: "center center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  const StyleDivBlur = {
    position: "absolute",
    backdropFilter: " blur(4px) brightness(0.3)",
    inset: "0px",
    zIndex: "-10",
  };

  console.log(movie);
  return (
    <div
      className="container pt-10"
      style={{
        ...StyleBackGround,
        backgroundImage: `url(${movie.hinhAnh})`,
      }}
    >
      <div style={StyleDivBlur}></div>
      <div className="grid grid-cols-12">
        <div className="md:col-span-6 col-span-12">
          <div className="w-4/5 border border-zinc-400 rounded-2xl">
            <img className="w-full" src={movie.hinhAnh} alt="" />
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="flex flex-col flex-wrap items-start justify-center gap-2 h-full">
            <div className="flex flex-row flex-wrap items-center justify-start gap-4">
              <div className="truncate items-center justify-center leading-4 text-base h-8 px-4 py-2 rounded-lg font-bold tracking-wide text-white font-mono bg-sky-700">
                {movie?.dangChieu ? (
                  <span >
                    Đang Chiếu
                  </span>
                ) : movie?.sapChieu ? (
                  <span>Sắp chiếu</span>
                ) : null}
                
              </div>
              <div className="flex truncate items-center justify-center gap-4  text-base h-8 px-4 py-2 rounded-lg font-bold text-lime-400 border border-lime-400">
                <div><FontAwesomeIcon icon={faStar} /></div>
                <div><span>{movie.danhGia}</span></div>
                
              </div>
            </div>
            <div>
              <h1 className="text-yellow-100 font-bold text-center pb-4">{movie.tenPhim}</h1>
            <p className="text-white">{movie.moTa}</p></div>
            <div className="flex w-full justify-around pt-5">
            <div className=" text-xl font-bold  text-center bg-cyan-700 py-4 px-5 rounded-3xl hover:border-2 hover:border-cyan-700 hover:text-cyan-700 hover:bg-white cursor-pointer">
              <span className="pr-3">Trailer</span>
              <FontAwesomeIcon icon={faLongArrowAltRight}/>
            </div>
            <div className=" text-xl  font-bold text-center bg-cyan-700 py-4 px-5 rounded-3xl hover:border hover:text-cyan-700 hover:bg-white cursor-pointer">Đặt vé</div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Overview;
