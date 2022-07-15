import './BlogSection.css';

function BlogSection() {
  return (    
      <section className = "blog-section page-section">

         <div className = "blog-section__content-container">

          
            <h2 className = "blog-section__heading">Perspectives</h2>
            <p className = "blog-section__body">A lifetime of insights; a cluster of thought provoking proverbs placed lovingly in chronological order -- Aman has borne both his heart and soul in this collection of works spanning a unique series of life experiences.</p>
            <p className = "blog-section__body">Sign up now to receive the exclusive bi-monthly blog content, detailing his current travels in Borneo, and his chariable side projects as and when they happen!</p>

            <div className = "blog-section__subscribe-form-container">

                <form className = "blog-section__subscribe-form">
                        <input type="email" placeholder ="ENTER EMAIL ADDRESS..." />
                        <button className = "dynamic-btn" type = "submit">Subscribe</button>
                </form>

            </div>

         </div>


      </section>
  );
}

export default BlogSection;
