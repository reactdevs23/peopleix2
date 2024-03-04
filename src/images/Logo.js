import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={424}
      height={79}
      fill="none"
    >
      <mask
        id="b"
        width={424}
        height={79}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="url(#a)" d="M0 .763h424v78H0z" />
      </mask>
      <g mask="url(#b)">
        <path fill="url(#c)" d="M0 .763h424v78H0z" />
      </g>
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="scale(.0023 .0125)" />
        </pattern>
        <pattern
          id="c"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#e" transform="scale(.0023 .0125)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbMAAABQCAAAAAC2IcTDAAAAAmJLR0QA/4ePzL8AAAu6SURBVHic7V3bddw4Ei377L+YgTARiBkYjsC9EQwcgTkRmI5g2hEMnQEVwUARLDsDKAN2BNwPvuoFkGpRLfmI98PmowhU1QUKIFBsAQAAZM53F6N2sOPqOITLGeu6rgv2tS14d3DPY6zrus69tg3vDBtQ1nWH17Zic1hkXXlxKXGP2V7gSK/msoi8JRJHADBbUNa12cVmvVFciTNoyNUg/SgEPsLxYn0wbrYp5h3CnfHZrfDj8Y6cHtqtulnXtS9s2tVxrX4GBb3ORhlL75YA8NHCNrjZqqB3h+M9Oa1IdMxqcvNUAsBHs1XVdquC3h1odLwhLFU3+Ox8AAD4+PIq7VhAS8Php2I+Lr6QW0UA2Dl7E/A/yenf04TflOTGfQUAi5yd7//6fAIAOH3+cZ8W3XE5ihM5nYa0mkTGR9f//59UUQ/HGgBaAIDWewDnPm2i4jvCj/4/dztf+hUAACBgMecxO3dlHx5LOs1349y8jE5GveklfNd1ne+PbXwtuXyueW8M28z1B2C3WU2ATfgt1wArEY2Nj59tUOq2/z3LqzuejeMDOa0zgKwil07leBSLjfcu8pJcG3+n33kSDtbeAcC58XWTlMutuQUAeAy+qVOSkNvc9LH7FBrv12iROZvfAsCp8fVFiwK5taZ3x0PwPlxSxIBDwNHxpjpAdYvvn9HkUo+NFZLGsREAAKonx8ZZygEAZCXe/Aku9lhe0eXRtjIxUVOy/aS2Esuts6k9P4YYwstejo1Zwer0UUsWYyPAgZZVsKV7XLTKWSXq8/iKSppuV49ZqgYAy7frGmU1GyDXxs6juhadqRp5ViwyNQexos4tWOIsK1teQNc1VnfACs6YPi0tnYQYjbNK1ufJJc1Fml0jkCrq3k/rlkyYRRWTneK9ruv6fQvV1CNkjRRvcINY4Ew0PLVK4sMBigEAAKpGk9WkqSqcsQFG4UwrXrFrAtZY365z6w3gopFY3ZuCbUWmNqCWj8XTnCWm21okWMMZ5HE76DOy8tYo9fnF4qVdM5BYHekTdP0mj/WcrhOkJSijLGBTIw8h8SRnqTobhbRVnPEJ/wzWeSVnBRXok0UC8elBGWqEXQgJC0eQlpKlKGP8JikjHoz3jRnVJJ3iLF1nBQLrOAPFrV0nAp80JNDbk/em6Z2YLul2YSRNHOBn8VRk7zoa3RczI+bRew1ns0cTnEX7wwDW6mE1Z3pbbfkUTRji0M2cOK/JAMAcI32A2UWwYCO3hU8/Gu9jsyiT7pFdh3rlKs7CKB3njA8Mrfe0kfHRZTVnfMLfQzQBbkhA9/io0uY2HhVKXjICl62dtVa83Wje6jrf+9yQqfVkN9WnrQ7WWvaqNvVKYerRWnvgFjlFC2obISgUBoBniFbcAWs506KuXEnghqDhbkUbjtpFQSWn1zFW93gZG4hSJ7N6vuxHFal1OjuFXl05SNNgMhUd5YxEY3SnQO4yzAGrOcvEuKNkR3HOUOxM5Ra3JQ/qpSh6BhFEm+d0MDpKZ9E0JNQIBzVJFK1ALzioprrZT5Q0I9UgtgW1EPpEBRSrOZMzckWccYZW3Sx/GnnBZSLglbLsCeTZyCvT5FscHqjCaIgenIIjgceipEXlSmVYXdq4C2k+FsZOZWFrbkF88XI9Z3wwrxQRxhkyvO4iGEYYNrkrlcJHYDlH7hBvGQAgPHhWzmxPAADWKOnsChdcSFMDESbdciAixhn2qaHqoUjNsqfWc8bnzEpo5Hsxfn74C6j49YftrUqux0dxrshpiU9yAACL1repLMDcrm97WXTv1ERE1fQi2kOqR65FHKiwU6C3wqMm9TSwfU64qYRIfJ86ovpnPx6FCzTizoL6H1xlzeu1VNog2Yaeo9bWF/xNfSyiRvV9Pr6FJJBPxYpwOz27QHwUh2/8ypeCL2Fyzvx0xPXZCIGetifkgwyAOvgfiCKf/hng6X3c65QNPybtEWd9c4jBouM//4yKXZiEwfY5AQCg9Eyfq+ddeXaO9RE8JCDE2uQpA99sJ1pt8unBZYXQpJ0eIjq+eq5ceKmCMS3CgZeNxQBqnFVxUXAs1O55x4Ij52yuyl9S6fWwSIPowNvAbFeUQP63fv2bJaecs9kVQX/eK6KvATFGGXaO1dvwA5AX/JZEG8x61MTX8X4WTqAAJaZu2Hi3AG9CmFQRCi9vb5dH1UXwaf4MOqTFOdM/TEMPXzY14kwbLrCyIT8siyTAvfO6MaOHnObP+ILX9jlnt2Y6JC+aAx7m95oLu5lh52K6jhvyHx+isACUX6YPPlVSMpka5OFkqwno+EdcvQ8+VYgGFhnvaap9iTQU88aDejjgjOh2T1Wqh6WnmYgHAR0vtYvEPCOPiOlqEFOT4S/EC3keeG6+I10GR0fBmZsPm6/iJjJHMroKdyZWndLPlupIyB4iYlq9VFodx2egoPxpw5DKpvmuZbloeMIvNm8teZIsV5Jb/LkyoRCWq/ANupneuwCv7pq0oRl+mthINtYOiqnYFroLMCho5SUhm7KZYHGNmG3BHIW++DnBmSemo8V9+tGo2JtL6U8EHbpBtmWH7oAXzlkOk4iVeO+BrICTvb9MMRWXTPfjB/3INh52ie5HVT1VHavcZ6v5gydYxsKksUySoGUO+R9tv4U+QabOlFGFGWeo09Od9EJxSoOqzepxJ19XA9FACq5UU2dplkIxXCfbh3VkK5h8oum6tqLOU5/RRFgO8VAbSxSY5n+SM/4TFVp+o5IgVOraAoDYHh0SuPmHUUYxsGvHFIBs2Lv3DutHuvvYGixtoKO/maljIlmhe4Zv+Tbe+yMAz7OZ2BysCcfRjN6WHi0ryHuSmM5z9cfrTr3+ocQr2j1+OXLqPwHAgyXXarm59qMUlyZ0/MKDh8yyKeP92Gbz/wlhyHI0Rv+qpybn6NL/uQ6i4KlcYeqjD2AObFl23Gyy/3KlRy94Ol04+RYgR9t+p6qaXheE5aIeAMjINzHY19TPZ9sHTS2BzJHClX6mPVRGtVuZKzc3vEiqPsIcklJJK13XpYcBBT6ldH8zkaO9ppABMzHMBjwus5SeJmEIIU1ypuaBPpczvOyykJOK53GLyWEzvas4Q4t38qZP2I+AvB4XmjlL/agLi9DHhCGYNMGZrvIzOSOj6EIiMXnfWmj1SK01nCFxJdXQx28h4LzfuNTEmTbNn3FUnooYgnTnnEUi10rOvE4Hy29OksZeAKJfMnUdfbPCpkbMxuJK3tnkhRRpxJS42MgZM1X8SJky4Y81vvELeM6ZiXlzLWcqHSIlPYuPUxUvPfERjcNy2FT9kypatFRh8kIiPAZiSlRs4mzpxwBzOa2NBoxpko05y+LxZS1nWh/SPvQsdCbYj9b0WkWaPSuWcKZ5nYUlqahHrow0KvYhqi7UawAAYpqveJENd0UyyLelAcCcGe1z1ERtmuYeZJ0ljwe9y5TaWl0UrJKMKb7TppwJr8tf6BUaeHzXKQFDfMQd91dfG3vR9aCA2tbmqd90ufn+/aFuxmKsPWzxgwUAAGXliumN5LE+BlWqLY+HA3k/ua+rSIneG0fUe/SVX9CisRb9nNRDJctuyzK3mUWP4LtVlbsDTqw71VXgRcS3+fpXuIKuXztN0tX0VHunvgwr36nHF0ZrjQHwLU8E47DGGAMAvp1aTwxZbrMcAEJomqDcx6YOb7TZwViAtmn8hTkDJs+Tdb4Ekr+d9JJY9wMeT0olateWiR6pnvoEQwj1stDGePVcuR1Pxnac+c1K2pHGZpyd/VYl7VjAZpypWVo7XgJbcXbeObsatuIs9jN0O7bHRpx9vf6M9/1ik/ezk1t4Md6xJZ7P2aOv9052VUQ5+1nE7ux4bejr+vtfoXvD0OcgP3N/XTV2PAFabHx0/tpq7HgClH72a+9kbxuin53dPgt84+D97N7slL110H62d7LfAaSf7Z3stwDi7Pz1sC/0/g6YY+ODC6+nxo4nYOxn57+0P8O04y1i6Gd7J/uN0PezvZP9VjBt5M8i7Xir+D+VMkyFTvtaQwAAAABJRU5ErkJggg=="
          id="d"
          width={435}
          height={80}
        />
        <image
          xlinkHref="data:image/png;base64,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"
          id="e"
          width={435}
          height={80}
        />
      </defs>
    </svg>
  );
};

export default Logo;
