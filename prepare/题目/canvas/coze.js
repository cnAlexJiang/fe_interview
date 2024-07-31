let nodes = {
  nodes: [
    {
      id: "100001",
      type: "1",
      meta: {
        position: {
          x: -1324.612421390549,
          y: -404.90230819893117,
        },
        testRun: {},
      },
      data: {
        outputs: [
          {
            type: "string",
            name: "BOT_USER_INPUT",
            required: false,
            description: "User input for this round of chat",
          },
          {
            type: "string",
            name: "",
            required: true,
          },
        ],
        nodeMeta: {
          title: "Start",
          icon: "https://sf16-va.tiktokcdn.com/obj/eden-va2/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-Start.png",
          description:
            "The starting node of the workflow, used to set the information needed to initiate the workflow.",
          subTitle: "",
        },
      },
    },
    {
      id: "900001",
      type: "2",
      meta: {
        position: {
          x: 669.6473480823186,
          y: -266.56177590911744,
        },
        testRun: {},
      },
      data: {
        nodeMeta: {
          title: "End",
          icon: "https://sf16-va.tiktokcdn.com/obj/eden-va2/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-End.png",
          description:
            "The final node of the workflow, used to return the result information after the workflow runs.",
          subTitle: "",
        },
        inputs: {
          terminatePlan: "returnVariables",
          inputParameters: [
            {
              name: "output",
              input: {
                type: "string",
                value: {
                  type: "ref",
                  content: {
                    source: "block-output",
                    blockID: "",
                    name: "",
                  },
                },
              },
            },
          ],
        },
      },
    },
    {
      id: "133190",
      type: "3",
      meta: {
        position: {
          x: 112.03565190015722,
          y: -425.36608254326615,
        },
        testRun: {},
      },
      data: {
        nodeMeta: {
          title: "LLM",
          icon: "https://sf16-va.tiktokcdn.com/obj/eden-va2/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-LLM.png",
          description:
            "Invoke the large language model, generate responses using variables and prompt words.",
          subTitle: "LLM",
        },
        inputs: {
          settingOnError: {},
          inputParameters: [],
          llmParam: [
            {
              name: "modleName",
              input: {
                type: "string",
                value: {
                  type: "literal",
                  content: "GPT-3.5 Turbo",
                },
              },
            },
            {
              name: "modelType",
              input: {
                type: "integer",
                value: {
                  type: "literal",
                  content: "113",
                },
              },
            },
            {
              name: "prompt",
              input: {
                type: "string",
                value: {
                  type: "literal",
                  content: "",
                },
              },
            },
            {
              name: "temperature",
              input: {
                type: "float",
                value: {
                  type: "literal",
                  content: "0.5",
                },
              },
            },
            {
              name: "generationDiversity",
              input: {
                type: "string",
                value: {
                  type: "literal",
                  content: "balance",
                },
              },
            },
            {
              name: "topP",
              input: {
                type: "float",
                value: {
                  type: "literal",
                  content: "1",
                },
              },
            },
            {
              name: "frequencyPenalty",
              input: {
                type: "float",
                value: {
                  type: "literal",
                  content: "0",
                },
              },
            },
            {
              name: "presencePenalty",
              input: {
                type: "float",
                value: {
                  type: "literal",
                  content: "0",
                },
              },
            },
            {
              name: "maxTokens",
              input: {
                type: "integer",
                value: {
                  type: "literal",
                  content: "2048",
                },
              },
            },
            {
              name: "responseFormat",
              input: {
                type: "integer",
                value: {
                  type: "literal",
                  content: "2",
                },
              },
            },
            {
              name: "enableChatHistory",
              input: {
                type: "boolean",
                value: {
                  type: "literal",
                  content: false,
                },
              },
            },
            {
              name: "systemPrompt",
              input: {
                type: "string",
                value: {
                  type: "literal",
                  content: "",
                },
              },
            },
          ],
        },
        outputs: [
          {
            type: "string",
            name: "output",
          },
        ],
        version: "2",
      },
    },
    {
      id: "109788",
      type: "5",
      meta: {
        position: {
          x: -622.5394188496325,
          y: -462.7773247248867,
        },
        testRun: {},
      },
      data: {
        nodeMeta: {
          title: "Code",
          icon: "https://sf16-va.tiktokcdn.com/obj/eden-va2/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-Code.png",
          description:
            "Write code to process input variables to generate return values.",
          subTitle: "Code",
        },
        inputs: {
          inputParameters: [],
          code: 'async function main({ params }: Args): Promise<Output> {\n    const ret = {\n        "key0": params.input + params.input,\n        "key1": ["hello", "world"],\n        "key2": {\n            "key21": "hi"\n        },\n    };\n\n    return ret;\n}',
          language: 5,
          settingOnError: {},
        },
        outputs: [
          {
            type: "string",
            name: "key0",
          },
          {
            type: "list",
            name: "key1",
            schema: {
              type: "string",
            },
          },
          {
            type: "object",
            name: "key2",
            schema: [
              {
                type: "string",
                name: "key21",
              },
            ],
          },
        ],
      },
    },
  ],
  edges: [
    {
      sourceNodeID: "100001",
      targetNodeID: "133190",
    },
    {
      sourceNodeID: "133190",
      targetNodeID: "900001",
    },
  ],
};
