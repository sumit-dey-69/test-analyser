import cn from "@/functions/cn";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const SVG = {
  accuracy: ({
    width = "16",
    height = "16",
    viewBox = "0 0 16 16",
    fill = "none",
    xmlns = "http://www.w3.org/2000/svg",
    className,
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M7.33301 1.33334V2.71334C6.15966 2.86214 5.06906 3.39674 4.23273 4.23307C3.3964 5.06939 2.8618 6.16 2.71301 7.33334H1.33301V8.66668H2.71301C2.8618 9.84002 3.3964 10.9306 4.23273 11.767C5.06906 12.6033 6.15966 13.1379 7.33301 13.2867V14.6667H8.66634V13.2867C9.83969 13.1379 10.9303 12.6033 11.7666 11.767C12.6029 10.9306 13.1375 9.84002 13.2863 8.66668H14.6663V7.33334H13.2863C13.1375 6.16 12.6029 5.06939 11.7666 4.23307C10.9303 3.39674 9.83969 2.86214 8.66634 2.71334V1.33334M7.33301 4.05334V5.33334H8.66634V4.06001C10.333 4.33334 11.6663 5.66668 11.9463 7.33334H10.6663V8.66668H11.9397C11.6663 10.3333 10.333 11.6667 8.66634 11.9467V10.6667H7.33301V11.94C5.66634 11.6667 4.33301 10.3333 4.05301 8.66668H5.33301V7.33334H4.05967C4.33301 5.66668 5.66634 4.33334 7.33301 4.05334ZM7.99967 7.33334C7.82286 7.33334 7.65329 7.40358 7.52827 7.52861C7.40325 7.65363 7.33301 7.8232 7.33301 8.00001C7.33301 8.17682 7.40325 8.34639 7.52827 8.47141C7.65329 8.59644 7.82286 8.66668 7.99967 8.66668C8.17649 8.66668 8.34605 8.59644 8.47108 8.47141C8.5961 8.34639 8.66634 8.17682 8.66634 8.00001C8.66634 7.8232 8.5961 7.65363 8.47108 7.52861C8.34605 7.40358 8.17649 7.33334 7.99967 7.33334Z"
        fill="#9F9F9F"
      />
    </svg>
  ),

  back: ({
    width = "23",
    height = "23",
    viewBox = "0 0 23 23",
    fill = "none",
    xmlns = "http://www.w3.org/2000/svg",
    className,
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M8.92186 6.43039L14.6719 12.1708L10.2731 16.5696C9.90894 16.9338 9.29561 16.9338 8.92186 16.5696C8.74267 16.3904 8.64201 16.1473 8.64201 15.8939C8.64201 15.6405 8.74267 15.3975 8.92186 15.2183L12.6402 11.5L8.92186 7.78164C8.74267 7.60245 8.64201 7.35942 8.64201 7.10601C8.64201 6.85261 8.74267 6.60958 8.92186 6.43039Z"
        fill="white"
      />
    </svg>
  ),

  incorrect: ({
    width = "12",
    height = "12",
    viewBox = "0 0 12 12",
    fill = "none",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2L10 10M10 2L2 10"
        stroke="red"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  computer: ({
    width = "24",
    height = "19",
    viewBox = "0 0 24 19",
    className,
    fill = "white",
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M14.25 3.5625V11.875H2.375V3.5625H14.25ZM2.375 1.1875C1.06504 1.1875 0 2.25254 0 3.5625V11.875C0 13.185 1.06504 14.25 2.375 14.25H6.72793L6.33086 15.4375H3.5625C2.90566 15.4375 2.375 15.9682 2.375 16.625C2.375 17.2818 2.90566 17.8125 3.5625 17.8125H13.0625C13.7193 17.8125 14.25 17.2818 14.25 16.625C14.25 15.9682 13.7193 15.4375 13.0625 15.4375H10.2904L9.89336 14.25H14.25C15.56 14.25 16.625 13.185 16.625 11.875V3.5625C16.625 2.25254 15.56 1.1875 14.25 1.1875H2.375ZM19.5938 1.1875C18.6104 1.1875 17.8125 1.98535 17.8125 2.96875V16.0312C17.8125 17.0146 18.6104 17.8125 19.5938 17.8125H21.9688C22.9521 17.8125 23.75 17.0146 23.75 16.0312V2.96875C23.75 1.98535 22.9521 1.1875 21.9688 1.1875H19.5938ZM20.1875 3.5625H21.375C21.7016 3.5625 21.9688 3.82969 21.9688 4.15625C21.9688 4.48281 21.7016 4.75 21.375 4.75H20.1875C19.8609 4.75 19.5938 4.48281 19.5938 4.15625C19.5938 3.82969 19.8609 3.5625 20.1875 3.5625ZM19.5938 6.53125C19.5938 6.20469 19.8609 5.9375 20.1875 5.9375H21.375C21.7016 5.9375 21.9688 6.20469 21.9688 6.53125C21.9688 6.85781 21.7016 7.125 21.375 7.125H20.1875C19.8609 7.125 19.5938 6.85781 19.5938 6.53125ZM20.7812 12.4688C21.0962 12.4688 21.3982 12.5939 21.6209 12.8166C21.8436 13.0393 21.9688 13.3413 21.9688 13.6562C21.9688 13.9712 21.8436 14.2732 21.6209 14.4959C21.3982 14.7186 21.0962 14.8438 20.7812 14.8438C20.4663 14.8438 20.1643 14.7186 19.9416 14.4959C19.7189 14.2732 19.5938 13.9712 19.5938 13.6562C19.5938 13.3413 19.7189 13.0393 19.9416 12.8166C20.1643 12.5939 20.4663 12.4688 20.7812 12.4688Z"
      />
    </svg>
  ),

  correct: ({
    width = "12",
    height = "12",
    viewBox = "0 0 12 12",
    fill = "none",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M1 6L2.25 4.75L4.75 7.25L9.75 2.25L11 3.5L4.75 9.75L1 6Z"
        fill="#0F9D58"
        stroke="#0F9D58"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  maths: ({
    width = "24",
    height = "24",
    viewBox = "0 0 24 24",
    fill = "white",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M5.62474 9.375V7.875H4.12474C3.82637 7.875 3.54023 7.75647 3.32925 7.5455C3.11827 7.33452 2.99974 7.04837 2.99974 6.75C2.99974 6.45163 3.11827 6.16548 3.32925 5.9545C3.54023 5.74353 3.82637 5.625 4.12474 5.625H5.62474V4.125C5.62474 3.82663 5.74327 3.54048 5.95425 3.3295C6.16523 3.11853 6.45137 3 6.74974 3C7.04811 3 7.33426 3.11853 7.54524 3.3295C7.75622 3.54048 7.87474 3.82663 7.87474 4.125V5.625H9.37474C9.67311 5.625 9.95926 5.74353 10.1702 5.9545C10.3812 6.16548 10.4997 6.45163 10.4997 6.75C10.4997 7.04837 10.3812 7.33452 10.1702 7.5455C9.95926 7.75647 9.67311 7.875 9.37474 7.875H7.87474V9.375C7.87474 9.67337 7.75622 9.95952 7.54524 10.1705C7.33426 10.3815 7.04811 10.5 6.74974 10.5C6.45137 10.5 6.16523 10.3815 5.95425 10.1705C5.74327 9.95952 5.62474 9.67337 5.62474 9.375ZM14.6247 5.625C14.3264 5.625 14.0402 5.74353 13.8292 5.9545C13.6183 6.16548 13.4997 6.45163 13.4997 6.75C13.4997 7.04837 13.6183 7.33452 13.8292 7.5455C14.0402 7.75647 14.3264 7.875 14.6247 7.875H19.8747C20.1731 7.875 20.4593 7.75647 20.6702 7.5455C20.8812 7.33452 20.9997 7.04837 20.9997 6.75C20.9997 6.45163 20.8812 6.16548 20.6702 5.9545C20.4593 5.74353 20.1731 5.625 19.8747 5.625H14.6247ZM3.32974 19.08C3.21921 19.183 3.13056 19.3072 3.06907 19.4452C3.00758 19.5832 2.97452 19.7322 2.97185 19.8832C2.96919 20.0343 2.99698 20.1843 3.05356 20.3244C3.11014 20.4645 3.19436 20.5917 3.30118 20.6986C3.40801 20.8054 3.53526 20.8896 3.67535 20.9462C3.81543 21.0028 3.96547 21.0306 4.11653 21.0279C4.26758 21.0252 4.41655 20.9922 4.55455 20.9307C4.69255 20.8692 4.81675 20.7805 4.91974 20.67L6.74974 18.84L8.57974 20.67C8.793 20.8687 9.07507 20.9769 9.36653 20.9718C9.65798 20.9666 9.93606 20.8486 10.1422 20.6424C10.3483 20.4363 10.4664 20.1582 10.4715 19.8668C10.4766 19.5753 10.3685 19.2933 10.1697 19.08L8.33974 17.25L10.1697 15.42C10.2803 15.317 10.3689 15.1928 10.4304 15.0548C10.4919 14.9168 10.525 14.7678 10.5276 14.6168C10.5303 14.4657 10.5025 14.3157 10.4459 14.1756C10.3893 14.0355 10.3051 13.9083 10.1983 13.8014C10.0915 13.6946 9.96422 13.6104 9.82414 13.5538C9.68406 13.4972 9.53401 13.4694 9.38296 13.4721C9.2319 13.4748 9.08293 13.5078 8.94493 13.5693C8.80694 13.6308 8.68273 13.7195 8.57974 13.83L6.74974 15.66L4.91974 13.83C4.70648 13.6313 4.42441 13.5231 4.13296 13.5282C3.84151 13.5334 3.56343 13.6514 3.35731 13.8576C3.15119 14.0637 3.03312 14.3418 3.02798 14.6332C3.02284 14.9247 3.13102 15.2067 3.32974 15.42L5.15974 17.25L3.32974 19.08ZM17.2497 15C17.6476 15 18.0291 14.842 18.3104 14.5607C18.5917 14.2794 18.7497 13.8978 18.7497 13.5C18.7497 13.1022 18.5917 12.7206 18.3104 12.4393C18.0291 12.158 17.6476 12 17.2497 12C16.8519 12 16.4704 12.158 16.1891 12.4393C15.9078 12.7206 15.7497 13.1022 15.7497 13.5C15.7497 13.8978 15.9078 14.2794 16.1891 14.5607C16.4704 14.842 16.8519 15 17.2497 15ZM14.2497 15.375C13.9514 15.375 13.6652 15.4935 13.4542 15.7045C13.2433 15.9155 13.1247 16.2016 13.1247 16.5C13.1247 16.7984 13.2433 17.0845 13.4542 17.2955C13.6652 17.5065 13.9514 17.625 14.2497 17.625H20.2497C20.5481 17.625 20.8343 17.5065 21.0452 17.2955C21.2562 17.0845 21.3747 16.7984 21.3747 16.5C21.3747 16.2016 21.2562 15.9155 21.0452 15.7045C20.8343 15.4935 20.5481 15.375 20.2497 15.375H14.2497ZM18.7497 19.5C18.7497 19.8978 18.5917 20.2794 18.3104 20.5607C18.0291 20.842 17.6476 21 17.2497 21C16.8519 21 16.4704 20.842 16.1891 20.5607C15.9078 20.2794 15.7497 19.8978 15.7497 19.5C15.7497 19.1022 15.9078 18.7206 16.1891 18.4393C16.4704 18.158 16.8519 18 17.2497 18C17.6476 18 18.0291 18.158 18.3104 18.4393C18.5917 18.7206 18.7497 19.1022 18.7497 19.5Z"
      />
    </svg>
  ),

  next: ({
    width = "23",
    height = "23",
    viewBox = "0 0 23 23",
    fill = "none",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M15 6L10 11L15 16"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  reasoning: ({
    width = "24",
    height = "24",
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "white",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M11.9998 4.99999C12.001 4.60002 11.9222 4.20385 11.768 3.83479C11.6139 3.46572 11.3874 3.13122 11.1021 2.85093C10.8168 2.57065 10.4783 2.35026 10.1065 2.20272C9.73472 2.05518 9.33721 1.98347 8.93733 1.9918C8.53744 2.00014 8.14326 2.08835 7.77797 2.25126C7.41268 2.41416 7.08365 2.64847 6.81023 2.94039C6.53682 3.23232 6.32454 3.57597 6.18588 3.95114C6.04722 4.32631 5.98499 4.72542 6.00283 5.12499C5.41503 5.27613 4.86933 5.55904 4.40706 5.9523C3.94479 6.34556 3.57807 6.83886 3.33467 7.39484C3.09128 7.95081 2.97759 8.55488 3.00222 9.1613C3.02685 9.76772 3.18915 10.3606 3.47683 10.895C2.97101 11.3059 2.57326 11.8342 2.31817 12.4339C2.06308 13.0336 1.95839 13.6866 2.01319 14.336C2.068 14.9854 2.28065 15.6115 2.63264 16.16C2.98462 16.7085 3.46529 17.1626 4.03283 17.483C3.96275 18.0252 4.00457 18.5761 4.15572 19.1015C4.30686 19.627 4.56413 20.1158 4.91161 20.5379C5.2591 20.9601 5.68944 21.3065 6.17605 21.5557C6.66266 21.805 7.19521 21.9519 7.74081 21.9873C8.28641 22.0227 8.83347 21.9459 9.34822 21.7616C9.86296 21.5773 10.3345 21.2894 10.7336 20.9157C11.1327 20.5421 11.451 20.0906 11.6688 19.5891C11.8866 19.0876 11.9992 18.5467 11.9998 18V4.99999Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.99999C11.9988 4.60002 12.0776 4.20385 12.2318 3.83479C12.386 3.46572 12.6124 3.13122 12.8977 2.85093C13.1831 2.57065 13.5216 2.35026 13.8934 2.20272C14.2651 2.05518 14.6626 1.98347 15.0625 1.9918C15.4624 2.00014 15.8566 2.08835 16.2219 2.25126C16.5872 2.41416 16.9162 2.64847 17.1896 2.94039C17.463 3.23232 17.6753 3.57597 17.814 3.95114C17.9526 4.32631 18.0149 4.72542 17.997 5.12499C18.5848 5.27613 19.1305 5.55904 19.5928 5.9523C20.0551 6.34556 20.4218 6.83886 20.6652 7.39484C20.9086 7.95081 21.0223 8.55488 20.9976 9.1613C20.973 9.76772 20.8107 10.3606 20.523 10.895C21.0288 11.3059 21.4266 11.8342 21.6817 12.4339C21.9368 13.0336 22.0415 13.6866 21.9867 14.336C21.9318 14.9854 21.7192 15.6115 21.3672 16.16C21.0152 16.7085 20.5345 17.1626 19.967 17.483C20.0371 18.0252 19.9953 18.5761 19.8441 19.1015C19.693 19.627 19.4357 20.1158 19.0882 20.5379C18.7407 20.9601 18.3104 21.3065 17.8238 21.5557C17.3372 21.805 16.8046 21.9519 16.259 21.9873C15.7134 22.0227 15.1664 21.9459 14.6516 21.7616C14.1369 21.5773 13.6654 21.2894 13.2663 20.9157C12.8671 20.5421 12.5488 20.0906 12.331 19.5891C12.1133 19.0876 12.0006 18.5467 12 18V4.99999Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9996 13C14.16 12.7047 13.4269 12.167 12.8929 11.455C12.3589 10.743 12.048 9.88867 11.9996 9C11.9511 9.88867 11.6402 10.743 11.1062 11.455C10.5722 12.167 9.83912 12.7047 8.99956 13M17.5986 6.5C17.8406 6.08059 17.9775 5.60882 17.9976 5.125M6.00256 5.125C6.02234 5.60873 6.15889 6.0805 6.40056 6.5M3.47656 10.896C3.6595 10.747 3.85527 10.6145 4.06156 10.5M19.9376 10.5C20.1439 10.6145 20.3396 10.747 20.5226 10.896M5.99956 18C5.31039 18.0003 4.63283 17.8226 4.03256 17.484M19.9666 17.484C19.3663 17.8226 18.6887 18.0003 17.9996 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  unattempt: ({
    width = "12",
    height = "12",
    viewBox = "0 0 12 12",
    fill = "none",
    className,
    xmlns = "http://www.w3.org/2000/svg",
    ...props
  }: Props) => (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      height={height}
      width={width}
      fill={fill}
      className={cn("h-full w-min", className)}
      {...props}
    >
      <path
        d="M5.36648 9.37559V11.6251C5.36178 11.8301 5.20648 11.9951 5.01448 12.0001H2.89872C2.8061 11.9974 2.71796 11.9572 2.65241 11.8876C2.58685 11.8181 2.54886 11.7245 2.54625 11.6261V9.37609C2.55095 9.17109 2.70625 9.00659 2.89872 9.00159H5.01637C5.20931 9.00659 5.3646 9.17159 5.36931 9.37609L5.36648 9.37559ZM8.15378 3.75209C8.15448 4.34522 7.99756 4.92652 7.70107 5.42909L7.70813 5.41609C7.57265 5.6233 7.41098 5.80971 7.22766 5.97009L7.22295 5.97409C7.07189 6.11509 6.90672 6.24909 6.7326 6.37109L6.71566 6.38209C6.58609 6.46642 6.40664 6.57725 6.17731 6.71459C5.93479 6.86127 5.72901 7.06773 5.57731 7.31659L5.57307 7.32359C5.44117 7.50384 5.35745 7.71854 5.33072 7.94509L5.33025 7.95109C5.32862 8.06283 5.2911 8.17062 5.22389 8.25659L5.22437 8.25559C5.19722 8.29899 5.16064 8.33482 5.11772 8.36006C5.07481 8.3853 5.02681 8.3992 4.97778 8.40059H2.86013C2.81127 8.39708 2.7643 8.37917 2.72448 8.34888C2.68467 8.31858 2.65358 8.2771 2.63472 8.22909L2.63425 8.22709C2.57471 8.12084 2.54272 7.99973 2.54154 7.87609V7.45359C2.55218 6.90516 2.75701 6.38115 3.11519 5.98609L3.11472 5.98659C3.4566 5.56232 3.87879 5.21937 4.35378 4.98009L4.37637 4.97009C4.6548 4.85166 4.90703 4.67305 5.11707 4.44559L5.11754 4.44509C5.27161 4.24404 5.35022 3.98954 5.33825 3.73059V3.73309C5.33042 3.59099 5.28914 3.45326 5.21818 3.33252C5.14722 3.21179 5.04886 3.11193 4.93213 3.04209L4.92789 3.04009C4.64858 2.83727 4.31647 2.73253 3.97825 2.74059H3.97966C3.6408 2.72637 3.30596 2.82268 3.02013 3.01659L3.02672 3.01209C2.67903 3.32752 2.36627 3.68398 2.09448 4.07459L2.08272 4.09209C2.05126 4.13795 2.01017 4.17539 1.9627 4.20143C1.91524 4.22747 1.86272 4.24139 1.80931 4.24209C1.73003 4.23935 1.65307 4.21302 1.58719 4.16609L1.5886 4.16709L0.142013 2.99559C0.0699338 2.93998 0.0210027 2.85679 0.00554231 2.76359L0.00507172 2.76159C-0.00965393 2.67028 0.00794733 2.57642 0.0544835 2.49809L0.0535423 2.49959C0.833307 1.00009 2.3119 0.00158691 4.01072 0.00158691C4.05903 0.00158691 4.10719 0.00242025 4.15519 0.00408691H4.14813C4.64382 0.00716225 5.13455 0.109271 5.59472 0.305087L5.56789 0.295087C6.03628 0.483405 6.47405 0.748445 6.86531 1.08059L6.85589 1.07259C7.23432 1.39527 7.54877 1.79446 7.78107 2.24709L7.79048 2.26759C8.01778 2.69609 8.15189 3.20809 8.15236 3.75309L8.15378 3.75209Z"
        fill="#C66807"
      />
    </svg>
  ),
};

export default SVG;
