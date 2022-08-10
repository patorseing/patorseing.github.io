import Script from "next/script";

const ProductionScript = () => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") return null;

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              console.log(w[l])
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
    </Script>
  );
};

export default ProductionScript;
