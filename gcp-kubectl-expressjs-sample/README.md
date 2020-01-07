
# Project : gcp-kubectl-expressjs-sample

### This is a simple nodejs program that run on kubernate cluster with GCP Project. Below are the steps that help to run the nodejs application on GCP envirnoment - 

#### Prerequisite - 
  
   * [ Must have Google Cloud access ](https://console.cloud.google.com/)

   *  Signed in into Google Cloud Console

   *  Lunch Cloud Shell on Google Console Cloud.

#### Step 1:

   * Get all projects in GCP
   ```
   gcloud  projects list
   ````
   * Set the project config in Google console.
   ```
   gcloud config set project <PROJECT_NAME>
   
   export PROJECT_ID=<PROJECT_NAME>

   echo $PROJECT_ID
   ````
   * set compute/zone 
   ```
   gcloud config set compute/zone us-central1-a
   ```
   * Finally, check all the configuration is setup correctly
   ```
   gcloud config list
   ```

#### Step 2 :

 Create a cluster with name "demo-cluster-app" with node 3. ( wait few mins till cluster is created. )
  ```
  gcloud container clusters create demo-cluster-app --num-nodes=3 --zone us-central1-a
  ``` 
  
  Checkout the below github code

  ```
  git clone https://github.com/ajaykumar2014/gcp-kubectl-sample.git

  cd gcp-kubectl-sample/gcp-kubectl-expressjs-sample/
  ```
  build and submit Docker images and images is created on console status then copy complete images path i.e ( gcr.io/self-exercise/kub_node:1.0). Note - Make sure $PROJECT_ID should be valid.
  ```
  gcloud builds submit -t gcr.io/$PROJECT_ID/kub_node:1.0
  ```
  Open deployment.yaml file and replace images name with copied images name.

  ```
  kubectl apply -f deployment.yaml

  kubectl get deployment

  kubectl apply -f service.yaml

  ```

#### 

Test nodejs api, Below kubernate command that will list out all running service in kuberctl. copy EXTERNAL_ID address of type loadbalance.

```
kubectl get svc
```
```
kubernetes   ClusterIP      10.51.240.1     <none>          443/TCP        20h
nodeapp      LoadBalancer   10.51.241.210   35.188.48.164   80:32592/TCP   19h
```

Run the curl command to test nodejs api.

```
curl 35.188.48.164
```


#### Delete cluster once testing is done.

```

gcloud config set project <PROJECT_ID>
gcloud container clusters delete demo-cluster-app --zone us-central1-a

```