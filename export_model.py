from transformers import AutoModelForSequenceClassification, AutoTokenizer

model_name = "bert-base-uncased"

model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

model.save_pretrained("backend/phishing_model")
tokenizer.save_pretrained("backend/phishing_model")

print("✅ Model exported to backend/phishing_model/")
