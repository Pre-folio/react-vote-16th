import { SubmitButtonProps } from '../../interfaces';
import { BLACK_1, GRAY_2, PURPLE_1 } from '../../styles/theme';

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <button>
      <svg
        width='180'
        height='60'
        viewBox='0 0 300 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M250.067 100C240.931 100 232.367 97.5428 225 93.2524C217.633 97.5428 209.07 100 199.933 100C190.88 100 182.389 97.5872 175.067 93.3688C167.745 97.5872 159.254 100 150.201 100C141.064 100 132.501 97.5428 125.134 93.2524C117.767 97.5428 109.203 100 100.067 100C90.9303 100 82.3669 97.5428 74.9998 93.2524C67.6327 97.5428 59.0693 100 49.9328 100C22.3557 100 -3.39263e-06 77.6142 -2.18557e-06 50C-9.78513e-07 22.3858 22.3557 -3.90768e-06 49.9328 -2.70224e-06C59.0693 -2.30288e-06 67.6327 2.45716 74.9998 6.74756C82.3669 2.45716 90.9303 -2.97145e-06 100.067 -2.57208e-06C109.203 -2.17271e-06 117.767 2.45717 125.134 6.74757C132.501 2.45717 141.064 -2.84129e-06 150.201 -2.44192e-06C159.254 -2.04617e-06 167.745 2.41276 175.067 6.63119C182.389 2.41276 190.88 -2.70854e-06 199.933 -2.31279e-06C209.07 -1.91343e-06 217.633 2.45717 225 6.74756C232.367 2.45717 240.931 -2.582e-06 250.067 -2.18263e-06C277.644 -9.77196e-07 300 22.3858 300 50C300 77.6142 277.644 100 250.067 100Z'
          fill={props.isActive ? PURPLE_1 : GRAY_2}
        />
        {props.content === 'Join' ? (
          <path
            d='M116.05 33.6484V58.6973C116.025 62.7744 114.146 64.8984 110.776 64.8984C107.676 64.8984 105.503 63.0674 105.454 60.1133H100.132C100.132 66.1191 104.624 69.4883 110.63 69.4883C117.148 69.4883 121.396 65.5088 121.421 58.6973V33.6484H116.05ZM141.89 69.5371C149.36 69.5371 154.243 64.0684 154.243 55.8652C154.243 47.6133 149.36 42.1445 141.89 42.1445C134.37 42.1445 129.463 47.6133 129.487 55.8652C129.463 64.0684 134.37 69.5371 141.89 69.5371ZM134.712 55.8652C134.712 50.7871 137.031 46.4658 141.89 46.4414C146.675 46.4658 148.97 50.7871 148.97 55.8652C148.97 60.9189 146.675 65.1914 141.89 65.1914C137.031 65.1914 134.712 60.9189 134.712 55.8652ZM161.87 69H167.095V42.4863H161.87V69ZM161.187 35.3086C161.211 37.0176 162.7 38.4092 164.507 38.3848C166.289 38.4092 167.778 37.0176 167.778 35.3086C167.778 33.5996 166.289 32.2324 164.507 32.2324C162.7 32.2324 161.211 33.5996 161.187 35.3086ZM181.167 53.2773C181.167 49.0537 183.73 46.6367 187.319 46.6367C190.835 46.6367 192.91 48.9316 192.935 52.7891V69H198.11V52.1543C198.135 45.5869 194.521 42.1445 189.077 42.1445C185.122 42.1445 182.51 43.9756 181.265 46.832H180.972V42.4863H175.942V69H181.167V53.2773Z'
            fill={props.isActive ? BLACK_1 : '#fff'}
          />
        ) : (
          <path
            d='M86.0645 69H107.402V64.3613H91.4355V33.6484H86.0645V69ZM126.211 69.5371C133.682 69.5371 138.564 64.0684 138.564 55.8652C138.564 47.6133 133.682 42.1445 126.211 42.1445C118.691 42.1445 113.784 47.6133 113.809 55.8652C113.784 64.0684 118.691 69.5371 126.211 69.5371ZM119.033 55.8652C119.033 50.7871 121.353 46.4658 126.211 46.4414C130.996 46.4658 133.291 50.7871 133.291 55.8652C133.291 60.9189 130.996 65.1914 126.211 65.1914C121.353 65.1914 119.033 60.9189 119.033 55.8652ZM157.324 79.498C164.16 79.498 169.312 76.3975 169.287 69.5859V42.4863H164.209V46.7832H163.867C162.891 45.123 161.084 42.1445 156.152 42.1445C149.78 42.1445 145.02 47.0029 145.02 55.4746C145.02 63.9463 149.854 68.6094 156.104 68.6094C160.986 68.6094 162.891 65.875 163.818 64.166H164.16V69.3906C164.136 73.5166 161.523 75.3232 157.373 75.2988C153.931 75.3232 151.587 74.1025 151.074 71.5879H145.752C146.216 76.5439 150.635 79.498 157.324 79.498ZM150.342 55.5723C150.317 50.4941 152.661 46.5635 157.275 46.5879C161.768 46.5635 164.209 50.2012 164.209 55.5723C164.209 61.041 161.719 64.2881 157.275 64.3125C152.71 64.2881 150.317 60.7725 150.342 55.5723ZM178.135 69H183.359V42.4863H178.135V69ZM177.451 35.3086C177.476 37.0176 178.965 38.4092 180.771 38.3848C182.554 38.4092 184.043 37.0176 184.043 35.3086C184.043 33.5996 182.554 32.2324 180.771 32.2324C178.965 32.2324 177.476 33.5996 177.451 35.3086ZM197.432 53.2773C197.432 49.0537 199.995 46.6367 203.584 46.6367C207.1 46.6367 209.175 48.9316 209.199 52.7891V69H214.375V52.1543C214.399 45.5869 210.786 42.1445 205.342 42.1445C201.387 42.1445 198.774 43.9756 197.529 46.832H197.236V42.4863H192.207V69H197.432V53.2773Z'
            fill={props.isActive ? BLACK_1 : '#fff'}
          />
        )}
      </svg>
    </button>
  );
};

export default SubmitButton;
