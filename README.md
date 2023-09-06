# SIHacko
Problem Statement ID	: 1347 
<br>
<br>
Problem Statement Title :
A software that suggests drugs and formulations for a disease/pharmacological property based on the Ayurvedic classical books/Repositories.
<br>
<br>
Description	:
<br>
Ayurveda has a large database of single herbs, minerals, and formulations that have been tailormade to suit each individual, his/her psychosomatic constitution, clinical condition, comorbidities, age, region, etc. These data are spread over more than 150 texts, amidst manuscripts in multiple languages and scripts. With the rise of transcriptional and translational facilities, several traditional medicinal texts are now available in their digitized forms. But for an Ayurvedic student or practitioner, exploring this multitude of literature for identifying their ""drug of choice' often becomes tedious and impractical. Here is the need of a custom software that can identify the apt formulation that has been designed to treat a constellation of symptoms and present it to the student/practitioner along with its reference and other desired properties. For example, the two formulations Punarnavadi Kashaya and Vyaghryadi Kashaya are mentioned in texts as follows: Both these are decoctions advised in Jvara (fever) and Kasa (cough). But in a patient with upper respiratory tract infections like common cold (Pinasa), Vyaghryadi would suit better than Punarnavadi. Whereas in a condition associated with inflammatory changes all over the body. I Punarnavadi would be the appropriate choice. The objective of the proposed software is to identify the single drugs and formulations that suit a set of symptoms. Certain ingredients (eg. jaggery) are unsuitable for certain categories of patients (e.g. diabetics). There are also medicine mediums that are unsuitable for specific diseases (e.g. fermented/alcoholic preparations in diabetes). Such information is also expected to be conveyed to the learner or practitioner who uses the software. The same disease has been mentioned in different names (E.g. Jvara and Santapa for fever) and the same word has been used to denote different (Eg. Abhaya generally means Terminalia chebula but in the context of Jatyadi ghrita, it means Vetiveria zizanioides. The multiple names of same diseases are expected to be included in the tags of each formulation. The sources for the formulations, and synonyms and similar words have been included in the data section. It is also desirable to include the Ayurvedic pharmacological properties of the single drugs, and the compound formulation (called Rasa, Guna, Virya, Vipaka, etc.) as and where available.
<br>
<br>
Organization	: Ministry of AYUSH
<br>
Category :	Software
<br>
Domain Bucket	: MedTech / BioTech / HealthTech
# Team Members

1) Atharva Deopujari <br>
2) Kirtan Bhavsar <br>
3) Vansh Bhavsar <br>
4) Vipin Mishra <br>
5) Akshaya Mudragada<br>

# Installation
Run the following commands in command prompt to install the required python libraries
<ol>
  <li><code>python --version</code></li>
  <li><code>pip --version</code></li>
  <li><code>python -m pip install -U pip</code></li>
   <li><code>pip install openai</code></li>
   <li><code>pip install gpt_index==0.4.24</code></li>
   <li><code>pip install langchain==0.0.148</code></li>
  <li><code>pip install PyPDF2</code></li>
  <li><code>pip install PyCryptodome</code></li>
  <li><code>pip install gradio</code></li>
</ol>

# To run/end
Run the following code in the command prompt at the file location

<code>python app.py</code>

To end the server <br>
Press <code>Control + C</code>
