import { onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "./firebase";

export const addBlog = (blogInfo) => {
  const blogRef = ref(db, "blogs/");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: blogInfo.title,
    desc: blogInfo.desc,
    img: blogInfo.img,
    email: blogInfo.email,
    date: blogInfo.date,
  });

  toast.success("Added Successfully");
};

export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const blogRef = ref(db, "blogs/");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArr = [];

      for (let id in data) {
        blogArr.push({ id, ...data[id] });
      }
      setBlogList(blogArr);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

export const useGetBlog = () => {
  const [blogDetail, setBlogDetail] = useState();
  const [load, setLoad] = useState(true);
  const getBlog = (id) => {
    const blogRef = ref(db, `blogs/${id}`);
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      setBlogDetail(data);
      setLoad(false);
    });
  };
  return { getBlog, blogDetail, setBlogDetail, load };
};

export const delBlog = (id) => {
  remove(ref(db, "blogs/" + id));
};

export const updateBlog = (blog, id) => {
  console.log(blog);
  console.log("ee");
  const updates = {};
  updates["blogs/" + id] = blog;
  return update(ref(db), updates);
};
