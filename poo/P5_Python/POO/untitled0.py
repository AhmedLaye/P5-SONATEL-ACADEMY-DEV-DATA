import csv
from datetime import datetime

class DataProcessor:
    def __init__(self, file_path):
        self.file_path = file_path
        self.valid_data = []
        self.invalid_data = []

    def process(self):
        with open(self.file_path, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if self.is_valid(row):
                    self.valid_data.append(row)
                else:
                    self.invalid_data.append(row)

    def is_valid(self, data):
        if not self.is_valid_num(data['Numero']):
            return False
        if not self.is_valid_prenom(data['PrÃ©nom']):
            return False
        if not self.is_valid_nom(data['Nom']):
            return False
        if not self.is_valid_date(data['Date de naissance']):
            return False
        if not self.is_valid_classe(data['Classe']):
            return False
        if not self.is_valid_notes(data['Note']):
            return False
        return True

    def is_valid_num(self, num):
        if len(num) != 7:
            return False
        if not num.isalnum():
            return False
        return True

    def is_valid_prenom(self, prenom):
        if len(prenom) < 3:
            return False
        if not prenom.isalpha():
            return False
        return True

    def is_valid_nom(self, nom):
        if len(nom) < 2:
            return False
        if not nom.isalpha():
            return False
        return True

    def is_valid_date(self, date_str):
        try:
            datetime.strptime(date_str, '%d/%m/%Y')
            return True
        except ValueError:
            return False

    def is_valid_classe(self, classe):
        if not classe[-1].isdigit():
            return False
        if len(classe) < 4 or len(classe) > 5:
            return False
        if classe[-3] != 'e':
            return False
        if classe[-2] not in ['A', 'B']:
            return False
        return True

    def is_valid_notes(self, notes_str):
        subjects = notes_str.split('#')
        for subject in subjects:
            parts = subject.split('[')
            name = parts[0]
            grades_str = parts[1][:-1]
            grades = grades_str.split('|')
            for grade in grades:
                if ':' in grade:
                    exam, homeworks = grade.split(':')
                    if not self.is_valid_grade(exam):
                        return False
                    homework_grades = homeworks.split('|')
                    for homework_grade in homework_grades:
                        if not self.is_valid_grade(homework_grade):
                            return False
                else:
                    if not self.is_valid_grade(grade):
                        return False
        return True

    def is_valid_grade(self, grade_str):
        if ',' in grade_str:
            grade1, grade2 = grade_str.split(',')
            if not self.is_float(grade1) or not self.is_float(grade2):
                return False
        else:
            if not self.is_float(grade_str):
                return False
        return True

    def is_float(self, value):
        try:
            float(value)
            return True
        except ValueError:
            return False

if __name__ == '__main__':
    processor = DataProcessor('data.csv')
    processor.process()

    print('Données valides :')
    for row in processor.valid_data:
        print(row)
