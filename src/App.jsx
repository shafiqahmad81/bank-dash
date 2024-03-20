function App() {
  return (
    <>
      {/* Header section start */}
      <header className="w-full bg-white flex sticky top-0 z-50">
        <div className="w-[250px] border-r border-border pl-9.5 pr-20 py-5 flex items-center ">
          <div className="flex items-center">
            <img src="../src/images/logo.png" alt="Logo Image" />
            <span className=" font-mont font-black text-2.1xl ml-2 text-[#343C6A ]">
              BankDash.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-10 py-5 border-b border-border">
          <div>
            <h1 className=" font-semibold text-2.4xl">Overview</h1>
          </div>
          <div className="flex items-center gap-7.5">
            <form>
              <div className="relative flex items-center font-normal">
                <input
                  type="text"
                  placeholder="Search for something"
                  className="hidden xl:block w-[255px] focus:outline-0 font-inter font-normal placeholder:text-search bg-body py-4 rounded-full pr-3 pl-14"
                />
                <img
                  className="flex items-center absolute ml-6"
                  src="../src/images/search.png "
                  alt="Icon"
                />
              </div>
            </form>
            <div className="w-[50px] h-[50px] bg-body flex items-center justify-center rounded-full">
              <img src="../src/images/settings.png" alt="Setting icon" />
            </div>
            <div className="w-[50px] h-[50px] bg-body flex items-center justify-center rounded-full">
              <img
                src="../src/images/notification.png"
                alt="Notification icon"
              />
            </div>
            <img src="../src/images/abatar.png" alt="Logo Image" />
          </div>
        </div>
      </header>
      {/* Header end */}

      {/* aside section start */}
      <aside className="hidden md:block w-[250px] fixed left-0 top-25 font-medium border-r border-border h-screen">
        <div className=" max-h-[calc(100vh-101px)] overflow-y-auto">
          <ul>
            <li className=" active: relative py-4 pl-11 text-lg leading-5  hover:text-blue transition-all duration-300  before:w-2 before:h-full  before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 text-blue before:bg-blue">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_78_425)">
                    <path
                      d="M24.3254 10.8738C24.3248 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4983 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678111 10.8667C0.674678 10.8702 0.671244 10.8738 0.667811 10.8772C-0.224828 11.775 -0.223302 13.2317 0.672198 14.1272C1.08132 14.5365 1.62168 14.7736 2.19941 14.7984C2.22287 14.8006 2.24652 14.8018 2.27037 14.8018H2.67682V22.3066C2.67682 23.7917 3.88513 25 5.37057 25H9.36036C9.76472 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1115 25 22.3198 23.7917 22.3198 22.3066V14.8018H22.6967C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z"
                      fill="currentcolor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_78_425">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Dashboard
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_78_393)">
                    <path
                      d="M5.20831 22.9167C5.20897 23.469 5.42867 23.9986 5.81923 24.3891C6.20979 24.7797 6.73931 24.9994 7.29165 25H17.7083C18.2606 24.9994 18.7902 24.7797 19.1807 24.3891C19.5713 23.9986 19.791 23.469 19.7916 22.9167V22.0052H5.20831V22.9167Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M19.7916 2.08333C19.791 1.531 19.5713 1.00148 19.1807 0.610917C18.7902 0.220358 18.2606 0.00065473 17.7083 0L7.29165 0C6.73931 0.00065473 6.20979 0.220358 5.81923 0.610917C5.42867 1.00148 5.20897 1.531 5.20831 2.08333V3.125H19.7916V2.08333Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9968 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M16.6666 6.24996H19.7916V4.16663H5.20831V16.6666H8.33331V18.75H5.20831V20.8333H19.7916V8.33329H16.6666V6.24996ZM15.625 10.4166H11.9791C11.841 10.4166 11.7085 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7993 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3057C11.7085 11.4034 11.841 11.4583 11.9791 11.4583H13.0208C13.6666 11.4576 14.2896 11.697 14.7689 12.1298C15.2482 12.5627 15.5495 13.1582 15.6144 13.8007C15.6793 14.4433 15.5032 15.087 15.1201 15.607C14.7371 16.1269 14.1745 16.486 13.5416 16.6145V17.7083H11.4583V16.6666H9.37498V14.5833H13.0208C13.1589 14.5833 13.2914 14.5284 13.3891 14.4307C13.4868 14.3331 13.5416 14.2006 13.5416 14.0625C13.5416 13.9243 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.1589 13.5416 13.0208 13.5416H11.9791C11.3333 13.5423 10.7103 13.3029 10.2311 12.8701C9.75179 12.4372 9.45045 11.8417 9.38555 11.1992C9.32064 10.5566 9.4968 9.9129 9.87983 9.39294C10.2629 8.87298 10.8254 8.51389 11.4583 8.38538V7.29163H13.5416V8.33329H15.625V10.4166Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M3.49828 16.6667L4.88734 15.3355L3.44593 13.8313L0.320931 16.8261C0.222115 16.9208 0.142929 17.034 0.0879011 17.1594C0.0328728 17.2847 0.00308028 17.4196 0.000226477 17.5564C-0.00262733 17.6933 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2008 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z"
                      fill="currentcolor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_78_393">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Transactions
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_78_414)">
                    <path
                      d="M12.3219 12.0426C13.9763 12.0426 15.4089 11.4492 16.5794 10.2785C17.75 9.10793 18.3434 7.67571 18.3434 6.02109C18.3434 4.36705 17.75 2.93463 16.5792 1.76372C15.4085 0.593374 13.9761 0 12.3219 0C10.6672 0 9.235 0.593374 8.06446 1.76391C6.89392 2.93444 6.30035 4.36686 6.30035 6.02109C6.30035 7.67571 6.89392 9.10813 8.06465 10.2787C9.23538 11.449 10.6678 12.0426 12.3219 12.0426Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M22.8579 19.2237C22.8241 18.7366 22.7558 18.2052 22.6553 17.644C22.5538 17.0787 22.4232 16.5443 22.2668 16.0558C22.1052 15.5509 21.8855 15.0523 21.6139 14.5745C21.332 14.0786 21.0009 13.6468 20.6293 13.2915C20.2408 12.9197 19.7651 12.6209 19.215 12.4028C18.6668 12.186 18.0593 12.0761 17.4095 12.0761C17.1543 12.0761 16.9075 12.1808 16.4309 12.4912C16.1375 12.6825 15.7944 12.9037 15.4114 13.1484C15.0839 13.3571 14.6402 13.5526 14.0923 13.7296C13.5576 13.9026 13.0148 13.9903 12.479 13.9903C11.9432 13.9903 11.4006 13.9026 10.8654 13.7296C10.318 13.5528 9.87434 13.3573 9.54723 13.1486C9.16786 12.9062 8.82454 12.6849 8.5268 12.491C8.05073 12.1806 7.80373 12.0759 7.54852 12.0759C6.8985 12.0759 6.2912 12.186 5.74322 12.403C5.19352 12.6207 4.71764 12.9195 4.32873 13.2917C3.95737 13.6472 3.62606 14.0788 3.34454 14.5745C3.07312 15.0523 2.85339 15.5507 2.69165 16.056C2.53544 16.5444 2.40479 17.0787 2.30331 17.644C2.2028 18.2044 2.13451 18.736 2.10075 19.2243C2.06757 19.7026 2.05078 20.1991 2.05078 20.7005C2.05078 22.0055 2.46563 23.062 3.28369 23.8412C4.09164 24.61 5.16071 25.0001 6.46076 25.0001H18.4984C19.7985 25.0001 20.8672 24.6102 21.6753 23.8412C22.4936 23.0626 22.9084 22.0059 22.9084 20.7003C22.9082 20.1966 22.8912 19.6998 22.8579 19.2237Z"
                      fill="currentcolor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_78_414">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Accounts
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <g fill="currentcolor" clipPath="url(#a)">
                    <path d="M3.92 10.227H1.138c-.628 0-1.137.51-1.137 1.137v12.5C0 24.49.509 25 1.137 25H3.92c.627 0 1.136-.509 1.136-1.136v-12.5c0-.628-.509-1.137-1.136-1.137ZM10.569 13.636H7.785c-.629 0-1.137.509-1.137 1.136v9.09c0 .629.508 1.137 1.137 1.137h2.784c.627 0 1.136-.509 1.136-1.136v-9.09c0-.628-.509-1.137-1.136-1.137ZM17.215 13.636h-2.784c-.627 0-1.136.509-1.136 1.136v9.09c0 .629.509 1.137 1.136 1.137h2.784c.629 0 1.137-.509 1.137-1.136v-9.09c0-.628-.508-1.137-1.137-1.137ZM23.863 10.227H21.08c-.627 0-1.136.51-1.136 1.137v12.5c0 .627.509 1.136 1.136 1.136h2.784c.628 0 1.137-.51 1.137-1.136v-12.5c0-.628-.509-1.137-1.137-1.137ZM12.831 6.846V8.89c.62-.04 1.272-.33 1.272-1.012 0-.704-.715-.91-1.272-1.033ZM11.052 4.397c0 .517.385.816 1.16.972v-1.85c-.705.02-1.16.434-1.16.878Z" />
                    <path d="M12.5 0a6.257 6.257 0 0 0-6.25 6.25 6.257 6.257 0 0 0 6.25 6.249 6.257 6.257 0 0 0 6.25-6.249A6.257 6.257 0 0 0 12.5 0Zm.331 9.946v.64c0 .176-.135.352-.311.352-.175 0-.308-.176-.308-.352v-.64c-1.747-.042-2.615-1.086-2.615-1.902 0-.413.25-.65.64-.65 1.157 0 .257 1.425 1.975 1.497v-2.16c-1.532-.278-2.46-.95-2.46-2.096 0-1.405 1.168-2.13 2.46-2.17v-.551c0-.176.133-.352.308-.352.176 0 .311.176.311.352v.55c.806.022 2.46.527 2.46 1.54 0 .403-.302.64-.653.64-.673 0-.663-1.104-1.807-1.125v1.963c1.364.29 2.572.692 2.572 2.284 0 1.384-1.033 2.086-2.572 2.18Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Investments
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="none"
                >
                  <g fill="currentcolor" clipPath="url(#a)">
                    <path d="M22.96 7.163v-.355a2.969 2.969 0 0 0-2.964-2.965H2.966A2.969 2.969 0 0 0 0 6.808v.355h22.96ZM13.565 16.702c0-1.538.495-3 1.408-4.205H0v4.136a2.969 2.969 0 0 0 2.965 2.965h11.226a6.958 6.958 0 0 1-.626-2.896Zm-2.085-.899H8.921V14.28h2.56v1.523ZM3.415 14.28h3.983v1.523H3.415V14.28ZM16.555 10.973a6.929 6.929 0 0 1 3.99-1.25 6.98 6.98 0 0 1 2.416.428V8.687H0v2.286h16.555ZM26 16.702a5.456 5.456 0 1 0-10.912 0 5.456 5.456 0 0 0 10.912 0Zm-4.72 2.914v.62h-1.524v-.615c-.46-.156-.837-.43-1.205-.7l.9-1.23c.494.362.747.536 1.093.536.196 0 .355-.093.415-.243.072-.182-.03-.35-.273-.448 0 0-1.089-.363-1.592-.877-.422-.43-.557-1.037-.422-1.614a1.78 1.78 0 0 1 1.084-1.263v-.615h1.524v.59c.386.107.714.266.902.368l-.726 1.339c-.482-.262-.926-.34-1.098-.281-.168.057-.193.166-.203.207-.013.059-.02.148.073.252.09.1 1.032.483 1.032.483 1.018.414 1.497 1.454 1.115 2.42a1.895 1.895 0 0 1-1.095 1.071Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Credit Cards
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <g fill="currentcolor" clipPath="url(#a)">
                    <path d="M14.492 15.337c4.195 0 7.608-3.44 7.608-7.668C22.1 3.44 18.687 0 14.492 0S6.885 3.44 6.885 7.669c0 4.228 3.412 7.668 7.607 7.668Zm-2.444-5.275a.732.732 0 0 1 1.013-.212c.493.322.679.352 1.33.347.634-.004 1.003-.477 1.076-.915.036-.213.05-.733-.595-.961-.756-.267-1.53-.573-2.068-.995-.539-.422-.785-1.151-.644-1.902.154-.815.722-1.463 1.483-1.692l.02-.006V3.45a.732.732 0 1 1 1.464 0v.231c.497.119.845.346.986.452a.732.732 0 1 1-.877 1.172c-.15-.112-.565-.353-1.171-.17-.354.107-.446.456-.466.56-.039.206.005.399.108.48.373.293 1.045.552 1.653.767 1.12.396 1.744 1.434 1.55 2.584a2.594 2.594 0 0 1-.798 1.473c-.286.263-.62.45-.985.558v.332a.732.732 0 0 1-1.464 0v-.259c-.473-.057-.87-.205-1.404-.554a.732.732 0 0 1-.211-1.013ZM2.774 17.797H1.105a.732.732 0 0 0-.732.732v5.738c0 .404.328.732.732.732h1.67v-7.202ZM24.412 17.746a3.523 3.523 0 0 0-4.976 0l-2.193 2.192-.899.9a1.937 1.937 0 0 1-1.37.566h-4.37a.747.747 0 0 1-.752-.697.733.733 0 0 1 .732-.769h4.442c.893 0 1.668-.636 1.821-1.515a3.61 3.61 0 0 0 .054-.622.733.733 0 0 0-.733-.734h-2.434c-.796 0-1.56-.36-2.368-.743-.849-.4-1.726-.815-2.751-.883a7.747 7.747 0 0 0-2.673.292A2.37 2.37 0 0 0 4.248 17.8h-.01v7.197L16.85 25c.867 0 1.683-.338 2.296-.95l5.267-5.268a.733.733 0 0 0 0-1.036Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Loans
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <g fill="currentcolor" clipPath="url(#a)">
                    <path d="M24.785 1.25 23.75.215a.733.733 0 0 0-.821-.15l-5.563 2.456a.733.733 0 0 0-.215 1.185l4.143 4.143a.733.733 0 0 0 1.185-.214l2.456-5.564a.733.733 0 0 0-.15-.82ZM4.731 16.125l-4.088 4.09a2.2 2.2 0 0 0 0 3.107l1.035 1.035a2.2 2.2 0 0 0 3.108 0l4.089-4.088-4.144-4.143Zm-.456 5.646a.732.732 0 1 1-1.036-1.036l2.017-2.017a.732.732 0 1 1 1.036 1.036L4.275 21.77ZM11.982 17.161l-4.143-4.143a1.467 1.467 0 0 0-2.072 0 1.467 1.467 0 0 0 0 2.072l4.143 4.143c.571.57 1.5.57 2.072 0 .57-.571.57-1.5 0-2.072ZM19.222 7.85l-2.071-2.072-5.687 5.686a1.465 1.465 0 0 0-2.072 0l-.517.518 4.143 4.143.518-.518c.572-.572.572-1.499 0-2.071l5.686-5.687ZM23.715 17.498c-1.19-1.19-2.62-1.445-4.26-1.152l-3.33-3.329-.794.795a2.924 2.924 0 0 1-.76 2.831l-.517.517 2.292 2.291c-.232 1.293-.21 2.39.593 3.58.927 1.372 2.549 2.153 4.248 1.919a.747.747 0 0 0 .426-1.268l-1.007-1.006v-2.071h2.073l1.002 1.002a.747.747 0 0 0 1.268-.43 4.379 4.379 0 0 0-1.234-3.68ZM8.644 5.532c.29-1.623.056-3.051-1.151-4.259A4.342 4.342 0 0 0 4.399 0c-.197 0-.393.013-.586.038a.747.747 0 0 0-.43 1.27l1.012 1v2.086H2.314L1.31 3.376a.747.747 0 0 0-1.269.427A4.392 4.392 0 0 0 1.96 8.05c1.194.804 2.297.824 3.58.593l2.301 2.304.517-.517a2.924 2.924 0 0 1 2.831-.76l.795-.794-3.339-3.343Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Services
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <g fill="currentcolor" clipPath="url(#a)">
                    <path d="M4.811 16.668c.252.15.468.344.64.57h3.255V14.08l-1.543-.957a.732.732 0 1 1 .771-1.245l1.504.932 1.311-.813C8.135 8.413 8.735 3.332 12.216.465 6.482-1.456.468 2.814.44 8.945a8.933 8.933 0 0 0 4.37 7.723ZM5.909 18.702h6.933v1.66H5.909v-1.66ZM10.17 14.08v3.157h3.12a2.12 2.12 0 0 1 .613-.547 8.954 8.954 0 0 0 1.818-1.417 8.439 8.439 0 0 1-3.996-2.157l-1.554.965Z" />
                    <path d="M17.578.002c-3.84 0-6.982 3.174-6.982 7.03 0 3.63 2.785 6.633 6.356 6.954 4.133.37 7.607-2.907 7.607-6.953 0-3.85-3.132-7.03-6.981-7.03Zm.733 10.205v.153a.732.732 0 0 1-1.465 0v-.07c-.337-.06-.645-.185-1.035-.44a.732.732 0 1 1 .802-1.226c.357.234.473.252.96.248.472-.003.66-.373.696-.59.033-.196-.004-.456-.367-.585-.608-.215-1.231-.461-1.673-.808-1.006-.789-.702-2.59.617-3.07v-.106a.732.732 0 0 1 1.465 0v.04c.36.102.651.287.851.49a.732.732 0 0 1-1.044 1.027c-.04-.04-.266-.228-.755-.08-.194.058-.247.26-.258.32-.024.127.01.212.028.227.276.216.79.414 1.257.58 1.93.682 1.695 3.249-.079 3.89ZM7.08 22.705A2.297 2.297 0 0 0 9.376 25a2.297 2.297 0 0 0 2.295-2.295v-.879H7.08v.88Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
                My Privileges
              </a>
            </li>
            <li className=" relative py-4 pl-11 text-lg leading-5 hover:text-blue transition-all duration-300  before:w-2 before:h-full text-gray-1 before:bg-white before:absolute before:left-0 before:top-0 before:rounded-r-10 before:transition-all before:duration-300 ">
              <a className=" flex items-center gap-6.5" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentcolor"
                      d="M22.698 9.414h-.53c-.173-.54-.39-1.064-.65-1.567l.375-.376c.912-.91.887-2.37 0-3.255l-1.108-1.11a2.301 2.301 0 0 0-3.256 0l-.376.377a10.105 10.105 0 0 0-1.567-.65V2.3A2.304 2.304 0 0 0 13.284 0h-1.569a2.304 2.304 0 0 0-2.3 2.301v.531c-.54.173-1.065.39-1.568.65l-.376-.375a2.301 2.301 0 0 0-3.255 0l-1.11 1.109a2.301 2.301 0 0 0 0 3.255l.377.376c-.26.503-.478 1.028-.65 1.567H2.3A2.304 2.304 0 0 0 0 11.716v1.569a2.304 2.304 0 0 0 2.301 2.3h.531c.173.54.39 1.065.65 1.568l-.375.376a2.301 2.301 0 0 0 0 3.255l1.109 1.11a2.301 2.301 0 0 0 3.255 0l.376-.377c.503.26 1.028.478 1.567.65v.532A2.304 2.304 0 0 0 11.716 25h1.569a2.304 2.304 0 0 0 2.301-2.301v-.531c.54-.173 1.064-.39 1.567-.65l.376.375c.909.91 2.368.889 3.255 0l1.11-1.109a2.302 2.302 0 0 0 0-3.255l-.377-.376c.26-.503.478-1.028.65-1.567h.532A2.304 2.304 0 0 0 25 13.284v-1.569a2.304 2.304 0 0 0-2.302-2.3ZM12.5 17.94c-3 0-5.44-2.44-5.44-5.439 0-3 2.44-5.44 5.44-5.44 3 0 5.44 2.44 5.44 5.44 0 3-2.44 5.44-5.44 5.44Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Setting
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* aside section end */}
      {/* main section start */}
      <main className=" w-[calc(100%-250px)] h-screen bg-body py-6 px-10 ml-62">
        <div className=" max-h-[calc(100vh-101px)] overflow-y-auto">
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-22 leading-6 text-indigo">
              My Cards
            </h2>
          </div>
        </div>
      </main>
      {/* main section end */}
    </>
  );
}

export default App;
