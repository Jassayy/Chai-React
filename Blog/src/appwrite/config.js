import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      await this.databases.createDocument(
        conf.databaseUrl,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite : createpost :: " + error.message);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseUrl,
        conf.collectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("appwrite : updatePost :: " + error.message);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseUrl,
        conf.collectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("appwrite : deletePost :: " + error.message);
      return false;
    }
  }

  //get only one post or document
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseUrl,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite : getPost :: " + error.message);
      return false;
    }
  }

  //get all posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseUrl,
        conf.collectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite : getPosts :: " + error.message);
    }
  }

  //fileupload service (can put it in different folder too)

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite : uploadFile :: " + error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite : deleteFile :: " + error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.bucketId, fileId);
    } catch (error) {
      console.log("appwrite : getFilePreview :: " + error);
    }
  }
}

const service = new Service();

export default service;
