import {
  quizzes,
  quiz,
  addScore,
  score,
  users,
  addScoreToUser,
  tempUser,
  addUser,
  changeQuiz,
  clearScore,
} from "../js/quiz";

// test predefined array for any anormalities
describe("[Quiz list]", () => {
  it("[Quiz list] should be defined", () => {
    expect(quizzes).toBeDefined();
  });

  it("[Quiz list] should be a list", () => {
    expect(Array.isArray(quizzes)).toBeTruthy();
  });

  it("[Quiz list] object inside the list contains property { question, answer, options }", () => {
    let sameObj = true;

    quizzes.forEach((quiz_) => {
      const { question, answer, opiton } = quiz_;

      sameObj = (!question || answer || opiton) && sameObj;
    });

    expect(sameObj).toBe(true);
  });

  it("[Quiz list] should contain at least one quiz", () => {
    expect(quizzes.length).toBeGreaterThan(0);
  });

});

describe("[quiz]", () => {
  it("[quiz] should be defined", () => {
    expect(quiz).toBeDefined();
  });

  it("[quiz] should contains property { question, answer, options }", () => {
    const { question, answer, options } = quizzes[0]; //gets first quizz
    const hasProperties = (question && answer && options) === undefined;
    expect(hasProperties).toBeFalsy();
  });
});

describe("[changeQuiz]", () => {
  it("[changeQuiz] should be defined", () => {
    expect(changeQuiz).toBeDefined();
  });

  it("[changeQuiz] should be a function", () => {
    expect(typeof changeQuiz).toBe("function");
  });

  it("[changeQuiz] when called should change quiz", () => {
    const secondQuiz = quizzes[1];

    changeQuiz();
    expect(quiz).toEqual(secondQuiz);
  });

  it("[changeQuiz] when called should throw if reached end", () => {
    expect(() => {
      changeQuiz();
    }).toThrow();
  });
});

describe("[User]", () => {
  it("[tempUser], should be defined", () => {
    expect(tempUser).toBeDefined();
  });

  it("[tempUser], properties should exists ", () => {
    const { name, total } = tempUser;
    let hasProperties = name || undefined;

    hasProperties = total == 0;

    expect(hasProperties).toBeTruthy();
  });
});

describe("[users]", () => {
  test("[users] should be defined", () => {
    expect(users).toBeDefined();
  });

  it("[users] should be a list", () => {
    expect(Array.isArray(users)).toBeTruthy();
  });

  it("[users] should empty", () => {
    expect(users.length).toBe(0);
  });
});

describe("[addUser]", () => {
  it("[addUser] should be defined", () => {
    expect(addUser).toBeDefined();
  });

  it("[addUser] should throw if called with invalid input", () => {
    expect(() => {
      addUser();
    }).toThrow();
  });

  it("[addUser] should add a user given a { name }", () => {
    const name = "Linda";
    addUser(name);
    expect(tempUser.name).toBe(name);
  });
});

describe("[addScore]", () => {
  it("[addScore] should be defined", () => {
    expect(addScore).toBeDefined();
  });

  it("[addScore] to be a function", () => {
    expect(typeof addScore).toBe("function");
  });

  it("[addScore] should throw if parms { answer, option } are invalid!", () => {
    expect(() => {
      addScore();
    }).toThrow(/^Invalid answer or option!$/);
  });

  it("[addScore] When called, should increament when answer is correct!", () => {
    const answer = "no",
      opiton = "no";
    addScore(answer, opiton);
    expect(score).toBe(1);
  });

  it("[addScore] When called, should throw if the answer is not correct! ", () => {
    expect(() => {
      const answer = "yes",
        opiton = "no";
      addScore(answer, opiton);
    }).toThrow();
  });
});

describe("[clearScore]", () => {
  it("[clearScore] should be defined", () => {
    expect(clearScore).toBeDefined();
  });

  it("[clearScore] should reset score when called", () => {
    const initialScore = 0;
    clearScore();
    expect(score).toBe(initialScore);
    expect(tempUser.score).toBe(initialScore);
  });

  it("[clearScore] should be a function", () => {
    expect(typeof clearScore).toBe("function");
  });
});

describe("[addScoreToUser]", () => {
  it("[addScoreToUser] should be defined", () => {
    expect(addScoreToUser).toBeDefined();
  });

  it("[addScoreToUser] should throw if user invalid", () => {
    expect(() => {
      addUser("");
      addScoreToUser();
    }).toThrow();
  });

  it("[addScoreToUser] should add user to a list at the end", () => {
    addUser(tempUser.name);
    clearScore();
    addScoreToUser();
    expect(users[0]).toEqual(tempUser);
  });

  it("[addScoreToUser] when called should clear score ", () => {
    const initialScore = 0;
    addScoreToUser();
    expect(score).toBe(initialScore);
  });
});
