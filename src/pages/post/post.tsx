import { Carousel } from '@mantine/carousel';
import React from "react";
import styles from "./post.module.css";
import CommentSection from "../../components/Comments/comment";
import Navbar from "@/components/navbar/navbar";

export function Post() {
  return (
    <>
      <Navbar />
      <div className={styles.app}>
      <br />
      <br />
      <div className={styles.box}>
        <main className={styles.appMain}>
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <img
                className={styles.profileImage}
                src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/3c70-ivmqpch7575026.jpg/w700d1q75cms.jpg"
              />
              <span className={styles.postUsername}>kitty_kim</span>
            </div>
            <img
              className={styles.postImage}
              src="https://a.520gexing.com/uploads/allimg/2020090114/qun5wcn4f4r.jpg"
              alt="Post"
            />
            <img
              className={styles.button}
              src="https://t3.ftcdn.net/jpg/04/73/35/56/240_F_473355614_f8plUdYJsb8Jl6TSHUxjAR11v3jza41c.jpg"
            />
          </div>
          <CommentSection />
        </main>
        <div>
          <br />
          <br />
          <div className={styles.description}>
            <p>
              {" "}
              It's your outlook on life that counts. If you take yourself
              lightly and don't take yourself too seriously, pretty soon you can
              find the humor in our everyday lives. And sometimes it can be a
              lifesaver.
            </p>
            <p>—————————————————————————————</p>
            <div className={styles.hashtags}>
              <div className={styles.hashtag}> #positive_attitude </div>
              <div className={styles.hashtag}> #good_mood </div>
              <div className={styles.hashtag}> #humor_health </div>
            </div>
          </div>
          <br />
          <br />
          <h2> More From This Artist</h2>
          <div className={styles.box2}>
            <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/0f02-ivmqpch7577926.jpg/w700d1q75cms.jpg" />
            <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/88da-ivmqpch7575363.jpg/w700d1q75cms.jpg" />
            <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/3c70-ivmqpch7575026.jpg/w700d1q75cms.jpg" />
          </div>
        </div>
      </div>

      <h2> Related Works</h2>
      <div className={styles.relatedWorks}>
        <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/4c52-ivmqpch7569512.jpg/w700d1q75cms.jpg" />
        <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/a0b6-ivmqpch7574216.jpg/w700d1q75cms.jpg" />
        <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/1234-ivmqpch7574822.jpg/w700d1q75cms.jpg" />
        <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/ca02-ivmqpch7575448.jpg/w700d1q75cms.jpg" />
        <img src="https://k.sinaimg.cn/n/sinakd20122/0/w2000h2000/20200622/7124-ivmqpch7575677.jpg/w700d1q75cms.jpg" />
      </div>
      <br />
      <br />
      <Carousel slideSize="70%" height={200} slideGap="md" loop withIndicators>
      {/* ...slides */}
      </Carousel>
    </div>
    </>
  );
}

export default Post;