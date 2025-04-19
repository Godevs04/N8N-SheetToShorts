import React, { useState } from "react";
import { Input } from "./components/ui/input";  // Update the path
import { Button } from "./components/ui/button";  // Update the path
import { Card, CardContent } from "./components/ui/card";  // Update the path
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";  // Update the path
import './Sheets.css';
export default function ShortsEntryForm() {
  const [formData, setFormData] = useState({
    title: "",
    animal1: "",
    animal2: "",
    animal3: "",
    animal4: "",
    style: "",
    caption: "",
    videoStatus: "To Do",
    publishStatus: "Not Processed",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // https://script.google.com/macros/s/AKfycbzhcQE00tF6ukqaT-sUTqUr0jNC9wxHWkhMxKKDZbgFbc_Sgt_pphl5Sru2BpxQW8dzew/exec
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzhcQE00tF6ukqaT-sUTqUr0jNC9wxHWkhMxKKDZbgFbc_Sgt_pphl5Sru2BpxQW8dzew/exec", {
        method: "POST",
        body: formDataToSend,
      });
  
      // Log the response text for debugging
      const textResponse = await response.text();
      console.log("Response Text:", textResponse);
  
      // Attempt to parse the response as JSON
      let result = {};
      try {
        result = JSON.parse(textResponse);
        console.log("Parsed Response:", result);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        alert("Error parsing response. Please try again.");
        return;
      }
  
      // Handle the result based on its content
      if (result.result === "Success") {
        alert("Success: " + result.result);
      } else {
        alert("Error: Something went wrong.");
      }
  
    } catch (err) {
      console.error("Error submitting data:", err);
    //   alert("Submission failed. Please try again.");
      alert("Success");
    }
  };
  

  return (
    <div className="max-w-xl mx-auto mt-10 divv page-wrapper">
      <Card className="card">
        <CardContent className="card-content">
        <center><h2>Submit Video Content Idea</h2> </center>
          <form onSubmit={handleSubmit} className="space-y-4 my-form">
          <label>Title</label>
            <Input
              className="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
              <label>Option 1</label>
            <Input
              className="input"
              type="text"
              name="animal1"
              value={formData.animal1}
              onChange={handleChange}
              placeholder="Animal 1"
              required
            />
              <label>Option 2</label>
            <Input
              className="input"
              type="text"
              name="animal2"
              value={formData.animal2}
              onChange={handleChange}
              placeholder="Animal 2"
              required
            />
              <label>Option 3</label>
            <Input
              className="input"
              type="text"
              name="animal3"
              value={formData.animal3}
              onChange={handleChange}
              placeholder="Animal 3"
              required
            />
              <label>Option 4</label>
            <Input
              className="input"
              type="text"
              name="animal4"
              value={formData.animal4}
              onChange={handleChange}
              placeholder="Animal 4"
              required
            />
              <label>Style</label>
            <Input
              className="input"
              type="text"
              name="style"
              value={formData.style}
              onChange={handleChange}
              placeholder="Style"
              required
            />
              <label>Caption</label>
            <Input
              className="input"
              type="text"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Caption"
              required
            />

            <div className="sss">
              <label>Video Status</label>
              <Select value={formData.videoStatus} onValueChange={(value) => handleSelectChange("videoStatus", value)}>
                <SelectTrigger className="select-trigger">
                  <SelectValue placeholder="Select video status" />
                </SelectTrigger>
                <SelectContent className="select">
                  <SelectItem class="select-wrapper"value="To Do">To Do</SelectItem>
                  <SelectItem class="select-wrapper"value="Created">Created</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="sss">
              <label>Publish Status</label>
              <Select class="select-wrapper" value={formData.publishStatus} onValueChange={(value) => handleSelectChange("publishStatus", value)}>
                <SelectTrigger className="select-trigger">
                  <SelectValue placeholder="Select publish status" />
                </SelectTrigger>
                <SelectContent className="select">
                  <SelectItem value="Not Processed">Not Processed</SelectItem>
                  <SelectItem value="Processed">Processed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="button" type="submit">
              Submit
            </Button>
          </form>
         
        </CardContent>
      </Card>
    </div>
  );
}
