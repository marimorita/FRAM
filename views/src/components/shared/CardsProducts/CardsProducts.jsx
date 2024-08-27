import React from "react";

export const CardsProducts = () => {
  return (
      <div className=" cursor-pointer bg-white to-100% flex flex-col items-center gap-[20px] justify-center p-[15px] w-[14rem] h-[19rem] shadow-2xl rounded-[10px]">
      <div className=" flex justify-center items-center w-[7rem] h-[7rem]">
        <svg
          width="128"
          height="92"
          viewBox="0 0 128 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.9742 45.6636C46.9742 45.6636 33.7712 70.2486 24.4802 72.4836C15.1892 74.7186 6.38717 71.7684 4.82237 68.103C3.25757 64.4376 -2.80603 44.9484 3.25757 25.5486C9.32117 6.14882 17.732 1.67882 22.9154 0.606016C28.0988 -0.466784 44.627 0.606016 47.7566 17.145C50.8862 33.684 49.8104 35.8296 49.8104 35.8296L81.1064 38.0646C81.1064 38.0646 87.9524 20.0952 96.3632 17.145C104.774 14.1948 121.204 14.5524 126.094 31.8066C130.984 49.0608 124.53 80.2614 112.891 87.9498C101.253 95.6382 85.214 90.5424 81.9866 86.0724C78.7592 81.6024 79.1504 49.4184 79.1504 49.4184L46.9742 45.6636Z"
            fill="#3F3D56"
          />
          <path
            d="M46.8763 34.8464C44.6269 34.6676 42.3775 34.4888 40.1281 34.31C37.8787 34.1312 35.6293 33.863 33.3799 33.6842L34.0645 33.3266C33.0865 35.2934 32.4019 37.439 32.0107 39.5846C31.9129 40.121 31.9129 40.568 31.9129 41.1044C31.9129 41.3726 32.0107 41.5514 32.0107 41.8196C32.0107 41.909 32.1085 41.9984 32.1085 42.0878V42.1772C32.3041 42.2666 32.4997 42.356 32.6953 42.4454C32.9887 42.5348 33.1843 42.6242 33.4777 42.7136C34.0645 42.8924 34.6513 42.9818 35.2381 43.1606C37.5853 43.697 40.0303 44.0546 42.4753 44.4122C44.9203 44.7698 47.3653 45.1274 49.7125 45.485C59.4925 46.826 69.2725 47.9882 78.9547 49.508C69.0769 49.1504 59.1991 48.3458 49.4191 47.1836C44.5291 46.6472 39.6391 45.8426 34.7491 44.8592C34.1623 44.6804 33.5755 44.591 32.8909 44.3228C32.5975 44.2334 32.3041 44.144 31.9129 43.9652C31.5217 43.7864 31.2283 43.6076 30.8371 43.4288C30.7393 43.3394 30.6415 43.25 30.5437 43.0712C30.5437 42.9818 30.4459 42.8924 30.4459 42.803C30.3481 42.6242 30.2503 42.4454 30.2503 42.2666C30.1525 41.909 30.0547 41.6408 30.0547 41.2832C30.0547 41.015 30.0547 40.6574 30.0547 40.2998C30.0547 40.0316 30.1525 39.674 30.1525 39.4058C30.6415 37.0814 31.5217 34.9358 32.6953 32.8796L32.8909 32.522L33.3799 32.6114C35.6293 32.969 37.7809 33.3266 40.0303 33.7736C42.2797 34.2206 44.6269 34.31 46.8763 34.8464Z"
            fill="#000001"
          />
          <path
            d="M109.271 19.2905C105.848 20.1845 103.11 22.3301 100.861 24.7439C98.709 27.2471 96.8508 29.9291 95.4816 32.8793C94.1124 35.7401 93.0366 38.7797 92.2542 41.9087C91.4718 45.0377 90.885 48.1667 90.396 51.2957C89.418 57.6431 89.2224 63.9905 89.6136 70.4273C89.8092 73.5563 90.396 76.7747 91.374 79.8143C92.352 82.8539 93.9168 85.8935 96.753 87.7709C95.1882 86.9663 93.9168 85.8041 92.9388 84.4631C91.9608 83.1221 91.0806 81.6023 90.4938 80.0825C89.3202 77.0429 88.5378 73.8245 88.1466 70.6061C87.3642 64.1693 87.462 57.6431 88.44 51.1169C88.929 47.8985 89.5158 44.6801 90.396 41.5511C90.885 39.9419 91.374 38.4221 91.9608 36.9023C92.5476 35.3825 93.2322 33.8627 94.0146 32.3429C95.5794 29.3927 97.6332 26.7107 100.078 24.2969C101.35 23.1347 102.719 22.0619 104.186 21.1679C105.848 20.1845 107.511 19.5587 109.271 19.2905Z"
            fill="#000001"
          />
          <path
            d="M16.8503 72.8414C13.8185 67.0304 11.7647 60.7724 10.6889 54.425C10.1021 51.2066 9.80874 47.9882 9.71094 44.7698C9.71094 43.1606 9.71094 41.5514 9.90654 39.9422L10.1021 37.5284L10.3955 35.1146C10.8845 31.8962 11.6669 28.6778 12.7427 25.6382C13.8185 22.5092 15.1877 19.559 16.9481 16.6982C18.6107 13.8374 20.6645 11.1554 23.0117 8.74158C23.5985 8.11578 24.2831 7.57937 24.8699 7.04297C25.4567 6.50657 26.1413 5.97018 26.8259 5.43378C28.0973 4.36098 29.6621 3.55637 31.4225 3.10938C30.6401 3.37757 29.8577 3.73518 29.1731 4.27158C28.4885 4.71858 27.8039 5.25497 27.2171 5.79137C26.5325 6.32777 26.0435 6.95357 25.3589 7.48997C24.6743 8.02637 24.1853 8.74157 23.6963 9.27797C21.5447 11.7812 19.6865 14.4632 18.2195 17.324C15.1877 23.0456 13.2317 29.1248 12.3515 35.3828C11.3735 41.6408 11.3735 47.9882 12.1559 54.3356C13.0361 60.5936 14.6009 66.8516 16.8503 72.8414Z"
            fill="#000001"
          />
          <path
            d="M112.89 40.7466C109.663 41.5512 106.826 43.518 104.968 46.1106C103.306 48.7032 102.328 51.6534 102.132 54.693C101.741 57.6432 102.425 60.6828 104.088 63.2754C105.946 65.6892 109.076 67.209 112.499 67.5666C110.738 67.7454 108.978 67.4772 107.315 66.9408C105.555 66.4044 103.99 65.421 102.817 64.08C101.643 62.739 100.861 61.2192 100.469 59.5206C100.274 58.716 100.176 57.9114 100.078 57.0174C100.078 56.2128 100.078 55.4082 100.078 54.5142C100.078 53.6202 100.274 52.905 100.469 52.1004L100.763 50.8488C100.861 50.4018 100.958 50.0442 101.154 49.6866C101.447 48.882 101.741 48.1668 102.23 47.3622C102.621 46.647 103.11 45.9318 103.697 45.2166C105.848 42.624 109.271 40.9254 112.89 40.7466Z"
            fill="#000001"
          />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center ">
        <h1 className="text-[25px] text-[#1E1E1E]">
          <b>Mancuerna 15kg</b>
        </h1>
        <p className="text-[13px] text-[#3F3F3F]">
          Mancuerna muy grande y poderosa para crecer tus fibras musculares por
          metodos de repeticiones
        </p>
      </div>
      <div className=" w-[100%] gap-x-1.5 flex justify-end ">
        <div className="w-[2rem] h-[2rem] bg-[#692FDB] rounded text-center align-middle ">
          <p className="text-[#F0ECE3] text-[22px]">3</p>
        </div>
        <div className="w-[2rem] h-[2rem] bg-[#FE7A36] rounded text-center align-middle ">
          <p className="text-[#F0ECE3] text-[22px]">3</p>
        </div>
        <div className="w-[2rem] h-[2rem] bg-[#1E1E1E] rounded text-center align-middle ">
          <p className="text-[#F0ECE3] text-[22px]">3</p>
        </div>
      </div>
    </div>
  );
};
