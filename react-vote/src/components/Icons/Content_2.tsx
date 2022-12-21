import { ContentButtonProps } from '../../interfaces';

export function Content2({ onClick }: ContentButtonProps) {
  return (

    <button name="demo-day-vote" onClick={onClick}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.6067 0C24.4465 0 0 24.4497 0 54.6099C0 73.5281 9.61971 90.1994 24.2344 99.9993C9.61941 109.799 0 126.471 0 145.39C0 175.55 24.4497 200 54.6099 200H145.39C175.55 200 200 175.55 200 145.39C200 126.471 190.381 109.799 175.766 99.9993C190.38 90.1994 200 73.5281 200 54.6099C200 24.4497 175.553 0 145.393 0H100H54.6067Z"
          fill="#FACACF"

        />
        <path
          d='M63.975 93C70.8656 93 74.8344 88.7188 74.85 81.6562C74.8344 74.6094 70.8656 70.375 64.1937 70.375H56.6312V93H63.975ZM60.0687 90V73.375H63.975C68.9125 73.375 71.4437 76.3281 71.4437 81.6562C71.4437 87 68.9125 89.9844 63.7875 90H60.0687ZM87.3562 93.3438C91.0906 93.3438 93.7 91.5 94.45 88.75H91.075C90.5125 89.7812 89.2781 90.5938 87.3875 90.5938C84.6062 90.5938 82.7 88.7656 82.6062 85.5312H94.6687V84.3438C94.6687 78.2031 90.9969 75.8125 87.1375 75.8125C82.4031 75.8125 79.2781 79.4062 79.2937 84.625C79.2781 89.8906 82.3562 93.3438 87.3562 93.3438ZM82.6219 83.0312C82.7625 80.6406 84.4969 78.5469 87.1687 78.5625C89.7156 78.5469 91.3875 80.4531 91.3875 83.0312H82.6219ZM99.5812 93H102.925V82.5312C102.925 80.25 104.519 78.6875 106.394 78.6875C108.222 78.6875 109.487 79.8906 109.487 81.75V93H112.8V82.1875C112.8 80.1562 114.034 78.6875 116.175 78.6875C117.925 78.6875 119.362 79.6406 119.362 81.9375V93H122.706V81.625C122.691 77.7344 120.519 75.8125 117.456 75.8125C115.003 75.8125 113.159 76.9844 112.362 78.8125H112.175C111.456 76.9219 109.878 75.8125 107.612 75.8125C105.378 75.8125 103.706 76.9219 102.987 78.8125H102.8V76.0312H99.5812V93ZM135.525 93.3438C140.306 93.3438 143.431 89.8438 143.431 84.5938C143.431 79.3125 140.306 75.8125 135.525 75.8125C130.713 75.8125 127.572 79.3125 127.588 84.5938C127.572 89.8438 130.713 93.3438 135.525 93.3438ZM130.931 84.5938C130.931 81.3438 132.416 78.5781 135.525 78.5625C138.588 78.5781 140.056 81.3438 140.056 84.5938C140.056 87.8281 138.588 90.5625 135.525 90.5625C132.416 90.5625 130.931 87.8281 130.931 84.5938ZM79.4937 131C86.3844 131 90.3531 126.719 90.3687 119.656C90.3531 112.609 86.3844 108.375 79.7125 108.375H72.15V131H79.4937ZM75.5875 128V111.375H79.4937C84.4312 111.375 86.9625 114.328 86.9625 119.656C86.9625 125 84.4312 127.984 79.3062 128H75.5875ZM94.7812 126.219C94.7656 129.531 97.2812 131.375 100.5 131.375C103.312 131.375 104.875 129.953 105.531 128.688H105.656V131H108.906V119.719C108.891 114.797 104.953 113.812 102.25 113.812C98.2344 113.812 95.6094 115.844 95.3125 118.656H98.625C98.9688 117.406 100.156 116.5 102.125 116.5C104.391 116.5 105.578 117.609 105.562 119.531L105.578 120.891C104.797 120.922 102.25 121.062 101.125 121.125C98.0625 121.344 94.7656 122.344 94.7812 126.219ZM98.0312 126.25C98.0312 124.578 99.4062 123.75 101.594 123.594C102.391 123.547 104.812 123.375 105.578 123.328L105.594 124.875C105.594 126.891 103.969 128.703 101.25 128.719C99.375 128.703 98.0312 127.875 98.0312 126.25ZM115.975 137.375C118.772 137.359 120.491 135.938 121.475 133.25L128.475 114.031H124.881L120.6 127.188H120.412L116.131 114.031H112.569L118.787 131.219L118.381 132.344C117.584 134.484 116.725 134.547 115.694 134.562C115.225 134.547 114.569 134.531 114.194 134.5V137.281C114.616 137.344 115.287 137.359 115.975 137.375Z'
          fill='#484848'
        />
      </svg>
    </button>
  );
}
