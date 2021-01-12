import React from "react";
const icons = {
  II:
    "M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z",
  IE:
    "M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3zm53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150zm364.2 75.1h150v150.1h-150V662.1z",
  IM:
    "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z",
  IA:
    "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z",
  IT:
    "M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z",
  IQ:
    "M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z",
  B:
    "M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 01-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0165.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z",
  M:
    "M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z"
};

export default function Grade({
  icon,
  gradeName,
  gradeFullname,
  friends,
  ...rest
}) {
  return (
    <button
      className="transition duration-250 bg-green-100 text-green-500 m-4 px-5 py-4 rounded-xl text-center focus:outline-none hover:bg-green-200 transform hover:scale-105"
      style={{
        minWidth: "165px",
        maxWidth: "165px",
        maxHeight: "175px"
      }}
      {...rest}
    >
      <div>
        <div className="text-2xl font-semibold">
          {gradeName}
        </div>
        <div className="text-xs text-gray-900 mt-2">
          ({gradeFullname})
        </div>
        <div className="flex justify-center mt-3">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="2em"
            height="2em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d={icons[icon]}
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
}
